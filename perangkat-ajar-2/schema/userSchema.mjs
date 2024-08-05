import Joi from "joi";
const userSchema = Joi.object({
  userName: Joi.string().min(3).required,
  password: Joi.string().min(6),
});

export default userSchema;
