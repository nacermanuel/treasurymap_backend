const Users = require("../models/user.models");

class UsersServices {
  static async getAllUsers() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
