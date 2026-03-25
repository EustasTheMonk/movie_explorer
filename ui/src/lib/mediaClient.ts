import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_URL ?? 'http://localhost:4000/graphql');