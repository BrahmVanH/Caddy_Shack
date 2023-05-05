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
    }
  }
}

module.exports = resolvers;