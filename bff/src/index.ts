import { createServer } from 'node:http'
import {createSchema, createYoga} from 'graphql-yoga'
import { typeDefs } from './schema/typeDefs.generated'
import { resolvers } from './schema/resolvers.generated'

// Create a Yoga instance with a GraphQL schema.
const schema = createSchema({ typeDefs, resolvers })

const yoga = createYoga({ schema })

// Pass it into a server to hook into request handlers.
const index = createServer(yoga)

// Start the server and you're done!
index.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})