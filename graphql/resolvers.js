const { User } = require('../models');
const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (err) {
        console.log(err);
      }
    }
  },
  Mutation: {
    register: async (parent, args, context, info) => {
      let { username, email, password, confirmPassword } = args;
      let errors = {};
      try {
        // validate input data
        if(email.trim() === '') errors.email = 'email must not be empty';
        if(username.trim() === '') errors.username = 'username must not be empty';
        if(password.trim() === '') errors.password = 'password must not be empty';
        if(confirmPassword.trim() === '') errors.confirmPassword = 'confirmPassword must not be empty';
        // check if username and email already exists
        const hasUsername = await User.findOne({where: { username }});
        const hasEmail = await User.findOne({where: { Email }});
        if(hasUsername) errors.username = 'username is taken';
        if(hasEmail) errors.email = 'email is taken';

        if(Object.keys(errors).length > 0) throw errors;
        // hash password
        password = await bcrypt.hash(password, 6);
        // check if the username / email exists
        // create user
        const user = await User.create({username, email, password});
        // return user auto called to toJASON
        return user;
      } catch (err) {
        console.log(err);
        throw err
      }
    }
  }
};

module.exports = resolvers;