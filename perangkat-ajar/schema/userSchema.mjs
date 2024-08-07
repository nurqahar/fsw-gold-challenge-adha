import Joi from "joi";
const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email(),
  password: Joi.string().min(6),
});

export default userSchema;
