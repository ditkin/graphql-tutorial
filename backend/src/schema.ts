// Construct a schema, using GraphQL schema language
import { buildSchema, GraphQLSchema } from 'graphql';

export default buildSchema(`
  type Query {
    hello: String
    user: User
  }

  type User {
    id: String!
    name: String!
    monthsActive: Int
    friendsConnection(
      first: Int,
      after: String,
      last: Int,
      before: String
    ): UserFriendsConnection
  }

  type UserFriendsConnection {
    pageInfo: String!
    edges: [UserFriendsEdge]
  }
  
  type UserFriendsEdge {
    cursor: String!
    node: User
    friendedAt: String!
  }
`);
