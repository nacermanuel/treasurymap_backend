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
  static async getUserIdByEmail(email) {
    try {
      const result = await Users.findOne({
        where: { email },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getUserById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateUserById(id, data) {
    try {
      const result = await Users.update(data, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
