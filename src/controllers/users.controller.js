const UsersServices = require("../services/users.services");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UsersServices.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.getUserById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await UsersServices.updateUserById(id, data);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};
