;`
import { __COLLECTION_NAME_PASCAL_CASE__Data } from '@/types/__COLLECTION_NAME_CAMEL_CASE__Types';

import { mapMarkdownTo__COLLECTION_NAME_PASCAL_CASE__Data } from '@/utils/mapMarkdownTo__COLLECTION_NAME_PASCAL_CASE__Data';
import { transformMarkdownToCollectionData } from '@/utils/transformMarkdownToCollectionData';
import { transformMarkdownToItemData } from '@/utils/transformMarkdownToItemData';

import { PATHS } from '@/constants/paths';

const __COLLECTION_NAME_CONSTANT_CASE___COLLECTION_NAME = '__COLLECTION_NAME_KEBAB_CASE__';
const __COLLECTION_NAME_CONSTANT_CASE___DIRECTORY_PATH = PATHS.__COLLECTION_NAME_CONSTANT_CASE__.entriesContentPath as string;

export function get__COLLECTION_NAME_PASCAL_CASE__Data(slug: string): __COLLECTION_NAME_PASCAL_CASE__Data {
  return transformMarkdownToItemData<__COLLECTION_NAME_PASCAL_CASE__Data>(
    __COLLECTION_NAME_CONSTANT_CASE___DIRECTORY_PATH,
    __COLLECTION_NAME_CONSTANT_CASE___COLLECTION_NAME,
    slug,
    mapMarkdownTo__COLLECTION_NAME_PASCAL_CASE__Data,
  );
}

export function get__COLLECTION_NAME_PASCAL_CASE__sData(): __COLLECTION_NAME_PASCAL_CASE__Data[] {
  return transformMarkdownToCollectionData<__COLLECTION_NAME_PASCAL_CASE__Data>(
    __COLLECTION_NAME_CONSTANT_CASE___DIRECTORY_PATH,
    __COLLECTION_NAME_CONSTANT_CASE___COLLECTION_NAME,
    mapMarkdownTo__COLLECTION_NAME_PASCAL_CASE__Data,
  );
}
`
