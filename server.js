const { ApolloServer } = require('apollo-server');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/schemas');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});