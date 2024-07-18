
import { type SeoMetadata } from '@/types/metadataTypes';
import { type ImageProps } from '@/types/sharedProps/imageType';

export type DigestData = {
  title: string;
  issueNumber: number;
  articleNumber: number;
  publicationDate: string;
  body: string;
  image: ImageProps;
  seo: SeoMetadata;
}
