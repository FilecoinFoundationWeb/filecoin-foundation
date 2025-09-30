---
title: Protecting booster-http with nginx
draft: false
excerpt: >-
  Serve Filecoin retrievals via http securely as a Storage Provider.  Get
  started with these examples of how to protect booster-http with nginx tooling.
share_image: /uploads/BoostPart2.webp
date: 2023-05-24T18:03:39.605Z
categories:
  - updates
dim_image: true
image:
  url: /uploads/BoostPart2.webp
author: Dirk McCormick
---

Serving files over HTTP allows Storage Providers to take advantage of the ecosystem of tools that interact with HTTP servers. For example with nginx SPs can limit who can download files, the number of requests per second, and the download bandwidth each client can use per second.

By default, nginx puts configuration files into `/etc/nginx`

The default configuration file is `/etc/nginx/sites-available/default`

The IPFS gateway serves files from `/ipfs` so add a server block for location `/ipfs/`. Our nginx server will listen on port 7575 and forward requests to booster-http on port 7777:

```shell
# ipfs gateway config
server {
  listen 7575 default_server;
  listen[::]: 7575 default_server;
  location / ipfs / {
    proxy_pass [http://127.0.0.1:7](http://127.0.0.1:7878/)777;
  }
}
```

## Limiting Access

Let’s limit access to the IPFS gateway using the standard `.htaccess` file. We need to set up an `.htaccess` file with a username and password. Create a user named alice:

```shell
$ mkdir /etc/nginx/ipfs-gateway.conf.d
$ htpasswd -c /etc/nginx/ipfs-gateway.conf.d/.htpasswd alice
New password:
Re-type new password:
Adding password for user alice
```

Include the `.htaccess` file from `/etc/nginx/sites-available/default`:

```shell
location /ipfs/ {
  # htaccess authentication
  auth_basic "Restricted Server";
  auth_basic_user_file /etc/nginx/ipfs-gateway.conf.d/.htpasswd;
  proxy_pass [http://127.0.0.1:7878](http://127.0.0.1:7878/);
}
```

Now when we open any URL under the path /ipfs we will be presented with a Sign in dialog:

![](/uploads/Booster-signin.webp)

## Rate Limiting

To prevent users from making too many requests per second, let’s add rate limits.

First create a file with the rate limiting configuration at `/etc/nginx/ipfs-gateway.conf.d/ipfs-gateway.conf`. Add a request zone limit to the file of 1 request per second, per client IP:

`limit_req_zone $binary_remote_addr zone=client_ip_10rs:1m rate=1r/s;`

Include `ipfs-gateway.conf` from `/etc/nginx/sites-available/default` and set the response for too many requests to HTTP response code 429:

```shell
include /etc/nginx/ipfs-gateway.conf.d/ipfs-gateway.conf;
server {
  listen 7575 default_server;
  listen [::]:7575 default_server;
  location /ipfs/ {
  # htaccess authentication
  auth_basic "Restricted Server";
  auth_basic_user_file /etc/nginx/ipfs-gateway.conf.d/.htpasswd;
  limit_req zone=client_ip_10rs;
  limit_req_status 429;
  proxy_pass http://127.0.0.1:7878;
  }
}
```

Now if you click the refresh button in your browser on any path under /ipfs more than once per second you will see a 429 error page:

![](/uploads/Booster-429.webp)

## Bandwidth Limiting

We may want to limit the amount of bandwidth that clients can take up when downloading data from booster-http. Let’s set up bandwidth limiting, with different rates for each client.

Create a new `.htaccess` user called bob:

```shell
htpasswd /etc/nginx/ipfs-gateway.conf.d/.htpasswd bob
```

Add a mapping from `.htaccess` username to bandwidth limit in `/etc/nginx/ipfs-gateway.conf.d/ipfs-gateway.conf`:

```shell
map $remote_user $bandwidth_limit {
  default  1k;
  "alice"  10k;
  "bob"    512k;
}
```

Add a bandwidth limit to `/etc/nginx/sites-available/default`:

```shell
location /ipfs/ {
  # htaccess authentication
  auth_basic "Restricted Server";
  auth_basic_user_file /etc/nginx/ipfs-gateway.conf.d/.htpasswd;
  limit_rate $bandwidth_limit;
  limit_req zone=client_ip_10rs;
  limit_req_status 429;
  proxy_pass [http://127.0.0.1:7878](http://127.0.0.1:7878/);
}
```

The easiest way to demonstrate bandwidth limiting is to use CURL to download a file with user alice and then bob:

![](/uploads/Booster-alice.webp)

Note the difference in the Average Dload column (the average download speed).

In this section we’ve just scratched the surface of the ways in which nginx can set access limits, rate limits and bandwidth limits. In particular it’s possible to add limits by request token, or using JWT tokens. The examples in this section are adapted from [Deploying NGINX as an API Gateway](http://nginx.com/blog/deploying-nginx-plus-as-an-api-gateway-part-1) which goes into more detail.

To get started, make sure you update to the latest release of Boost ([v1.7.2](https://github.com/filecoin-project/boost/releases/tag/v1.7.2)) to try out the new booster-http functionality. You can follow the example in this blog post to protect booster-http, or learn more in the Boost documentation on [http retrieval](https://boost.filecoin.io/http-retrieval).

You can stay up to date on Boost by following our [GitHub](https://github.com/filecoin-project/boost). Please use the [Boost Discussion Board](https://github.com/filecoin-project/boost/discussions) to provide feedback and requests to help shape the future direction of the project.
