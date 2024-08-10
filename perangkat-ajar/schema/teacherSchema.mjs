import Joi from "joi";

const teacherSchema = Joi.object({
  guru: Joi.string().min(3).required(),
  jenis_kelamin: Joi.string().required(),
});

export default teacherSchema;
