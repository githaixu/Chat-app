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
`;

module.exports = typeDefs;