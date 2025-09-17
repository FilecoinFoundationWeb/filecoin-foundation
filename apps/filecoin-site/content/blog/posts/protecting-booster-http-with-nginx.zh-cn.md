---
title: 使用nginx保护booster-http
excerpt: 作为存储提供者，通过http安全提供Filecoin检索。下文是关于如何使用nginx工具保护booster-http的示例。
share_image: /uploads/BoostPart2.webp
image:
  url: /uploads/BoostPart2.webp
date: 2023-05-23T16:00:00.000Z
categories:
  - updates
dim_image: true
---

通过HTTP提供文件服务让存储提供者可以使用与HTTP服务器交互的工具生态系统。例如，通过nginx，存储提供者（SP）可以限制某用户下载文件、每秒请求数量以及每个用户端每秒可以使用的下载带宽。

默认情况下，nginx将配置文件放入`/etc/nginx`中

默认配置文件是`/etc/nginx/sites-available/default`

IPFS网关提供来自`/ipfs/`的文件，因此为`/ipfs/`的位置添加一个服务器区块。nginx服务器将听取7575端口，并将请求转发至7777端口的booster-http：

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

## 访问限制

使用标准的`.htaccess`文件限制对IPFS网关的访问，我们需要设置一个带有用户名和密码的`.htaccess`文件，创建一个名为alice的用户：

````shell
$ mkdir /etc/nginx/ipfs-gateway.conf.d
$ htpasswd -c /etc/nginx/ipfs-gateway.conf.d/.htpasswd alice
New password:
Re-type new password:
Adding password for user alice
``

包含`/etc/nginx/sites-available/default中的`.htaccess文件：

```shell
location /ipfs/ {
  # htaccess authentication
  auth_basic "Restricted Server";
  auth_basic_user_file /etc/nginx/ipfs-gateway.conf.d/.htpasswd;
  proxy_pass [http://127.0.0.1:7878](http://127.0.0.1:7878/);
}
````

现在，当我们打开路径/ipfs路径下的任何URL时，我们将看到一个登录对话框：

![](/uploads/Booster-signin.webp)

## 速率限制

为了防止用户每秒发出过多请求，需要添加速率限制。

首先在`/etc/nginx/ipfs-gateway.conf.d/ipfs-gateway.conf`中创建一个限速配置文件。在文件中添加一个请求区限制，即每个用户IP每秒1个请求：

`limit_req_zone $binary_remote_addr zone=client_ip_10rs:1m rate=1r/s;`

包含`/etc/nginx/sites-available/default`中的`ipfs-gateway.conf`，并将过多请求的响应设置为HTTP response code 429：

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

现在，如果您在浏览器中对/ipfs下任意路径点击刷新按钮超过一次，将会看到一个429错误页面：

![](/uploads/Booster-429.webp)

## 带宽限制

我们可能会想限制用户从booster-http下载数据时占用的带宽。请学习如何设置带宽限制，为每个用户端设置不同的速率。

创建一个名为bob的新`.htaccess`用户：

```shell
htpasswd /etc/nginx/ipfs-gateway.conf.d/.htpasswd bob
```

在`/etc/nginx/ipfs-gateway.conf.d/ipfs-gateway.conf`中添加从`.htaccess`用户名到带宽限制的映射：

```shell
map $remote_user $bandwidth_limit {
  default  1k;
  "alice"  10k;
  "bob"    512k;
}
```

在`/etc/nginx/sites-available/default`添加带宽限制：

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

展示带宽限制最简单的方法是通过CURL先用用户alice下载文件，再用用户bob下载文件：

![](/uploads/Booster-alice.webp)

注意平均Dload列(平均下载速度)的差异。

在本文中，我们仅对nginx设置访问限制、速率限制和带宽限制的方法进行了简单介绍，特别是可以通过请求令牌或使用JWT令牌来添加限制。本文示例改编自[Deploying NGINX as an API Gateway](http://nginx.com/blog/deploying-nginx-plus-as-an-api-gateway-part-1)，点击链接会有更详细的内容。

开始之前，请确保更新至Boost最新版本([v1.7.2](https://github.com/filecoin-project/boost/releases/tag/v1.7.2))并尝试新booster-http功能。您可以参考这篇博文中的示例，或者Boost文档中的[http检索](https://boost.filecoin.io/http-retrieval)。

请关注我们的[GitHub](https://github.com/filecoin-project/boost)来了解Boost的最新信息。为助力项目未来持续发展，请使用[Boost讨论区](https://github.com/filecoin-project/boost/discussions)提供反馈和需求，您的意见有益于项目的茁壮成长，期待您的回复！
