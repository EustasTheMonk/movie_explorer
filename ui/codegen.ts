import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  config: {
    enumsAsConst: true
  },
  documents: [`
  query Search($query: String!) {
    search(query: $query) {
      id
      title
      poster
      year
      rating
      type
    }
  }
`],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}

export default config