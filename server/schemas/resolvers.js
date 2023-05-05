const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {
    allUsers: async () => {
      const allUsers = await User.find({});
      console.log(allUsers);
      if (!allUsers) {
        throw new Error('Something went wrong');
      }

      return allUsers;
    },
    allMen: async () => {
      const users = await User.find({ gender: 'male' });
      if (!users) {
        throw new Error('Something went wrong');
      }
      return users;
    },
    allWomen: async () => {
      const users = await User.find({ gender: 'female' });
      if (!users) {
        throw new Error('Something went wrong');
      }
      return users;
    }
  }
}

module.exports = resolvers;