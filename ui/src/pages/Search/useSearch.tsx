import {useEffect, useRef, useState} from "react";
import {useDebounce} from "../../lib/utils.ts";
import {client} from "../../lib/mediaClient.ts";
import {SearchDocument, type SearchQuery} from "../../gql/graphql.ts";
import type {TypedDocumentNode} from "@graphql-typed-document-node/core";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<SearchQuery['search']>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [isNothingFound, setIsNothingFound] = useState(false)

  const debouncedSearchQuery = useDebounce(searchQuery, 300)
  const controllerRef = useRef< null | AbortController >(null)


  useEffect(() => {
    if (!debouncedSearchQuery) return;

    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setIsLoading(true)
    setIsNothingFound(false)
    setError(null)

    client.request(SearchDocument as unknown as TypedDocumentNode<SearchQuery, { query: string }>, { query: debouncedSearchQuery }).then(data => {
      setResults(data.search);
      if (data.search.length === 0) {
        setIsNothingFound(true)
      }
    }).catch(err => {
      if (err.name === 'AbortError') return;
      setError(err);
    }).finally(() => {
      setIsLoading(false);
    });

  }, [debouncedSearchQuery]);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
      setIsLoading(false)
    }
  }, []);

  return {
    searchQuery,
    isNothingFound,
    setSearchQuery,
    results,
    error,
    controllerRef,
    isLoading,
  }
};