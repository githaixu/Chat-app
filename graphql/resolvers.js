const { User } = require('../models');

const resolvers = {
  Query: {
    getUsers: () => {
      User.findAll().then(users => users)
        .catch(error => error.message);
    }
  }
};

module.exports = resolvers;