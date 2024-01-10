const UsersServices = require("../services/users.services");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UsersServices.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
};
