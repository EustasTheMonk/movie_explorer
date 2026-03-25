/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { _empty as Query__empty } from './../../resolvers/Query/_empty';
import    { search as Query_search } from './../../resolvers/Query/search';
import    { Media } from './../../resolvers/Media';
    export const resolvers: Resolvers = {
      Query: { _empty: Query__empty,search: Query_search },
      
      
      Media: Media
    }