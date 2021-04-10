const { User } = require('../models');

const resolvers = {
  Query: {
    getUsers: () => {
      const users = [
        {
          id:1,
          username: 'jin',
          email: 'test@hotmail.co.jp' 
        }
      ];
      return users;
    }
  },
};

module.exports = resolvers;