import User from "../models/userModel.mjs";
import userSchema from "../schema/userSchema.mjs";

export const createUser = async (req, res) => {
  const { errorSchema, valueSchema } = userSchema.validate(req.body);
  if (errorSchema) {
    return res.status(400).json({ errorSchema: error.details[0].message });
  }

  try {
    const newUser = await User.create(valueSchema);
    return res.status(201).json(newUser);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const getAllUser = async (req, res) => {
  const users = await User.getAllUser();
  return res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.getUserById(parseInt(req.params.id_user, DECIMAL));
  if (user) {
    return res.json(user);
  }
  return res.status(404).send("User not found");
};

export const updateUser = async (req, res) => {
  const { errorSchema, valueSchema } = userSchema.validate(req.body);
  if (errorSchema) {
    return res.status(400).json({ errorSchema: error.details[0].message });
  }

  const userId = parseInt(req.params.id_user, DECIMAL);
  const user = await User.getUserById(userId);
  //   check if user exist
  if (!user) return res.status(404).send("User not found");
  try {
    const updatedUser = await User.update(userId, valueSchema);
    return res.status(201).json(updatedUser);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id_user, DECIMAL);
  const user = await User.getUserById(userId);
  //   check if user exist
  if (!user) return res.status(404).send("User not found");

  await User.delete(parseInt(req.params.id_user, DECIMAL));
  return res.status(204).send();
};
