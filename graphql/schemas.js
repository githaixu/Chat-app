const { gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    getUsers: [User]
  }
  type User {
      username: String
      email: String
  }
  type Mutation {
    register(username: String! email: String! password: String! confirmPassword: String!): User!
  }
`;

module.exports = typeDefs;