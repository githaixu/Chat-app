const { ApolloServer } = require('apollo-server');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/schemas');
const { sequelize } = require('./models');

// create apollo server 
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// start the server and connect to the postgresql database with sequelize 
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);

  sequelize.authenticate()
    .then(() => console.log('Datavase connected'))
    .catch((error) => console.log(error.message))
});