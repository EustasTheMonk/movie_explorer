import type { CodegenConfig } from '@graphql-codegen/cli'
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config: CodegenConfig = {
  schema: /* GraphQL */ `
      type Query {
          _empty: String
      }

      extend type Query {
          search(query: String!): [Media!]!
      }

      type Media {
          id: ID!
          title: String!
          poster: String
          year: String
          rating: Float
          type: MediaType!
      }

      enum MediaType {
          MOVIE
          TV
      }
  `,
  generates: {
    'src/schema': defineConfig()
  }
}

export default config