import Joi from "joi";

const teacherSchema = Joi.object({
  teacherName: Joi.string().min(3).required(),
  sex: Joi.string().max(6).required(),
});

export default teacherSchema;
