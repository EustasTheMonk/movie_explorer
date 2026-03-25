/* eslint-disable */
type DocumentNode<T, V> = { __apiType?: T; __variablesType?: V };
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['ID']['output'];
  poster?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  type: MediaType;
  year?: Maybe<Scalars['String']['output']>;
};

export const MediaType = {
  Movie: 'MOVIE',
  Tv: 'TV'
} as const;

export type MediaType = typeof MediaType[keyof typeof MediaType];
export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  search: Array<Media>;
};


export type QuerySearchArgs = {
  query: Scalars['String']['input'];
};

export type SearchQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Media', id: string, title: string, poster?: string | null, year?: string | null, rating?: number | null, type: MediaType }> };


export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;