import Joi from "joi";

const teacherSchema = Joi.object({
  namaGuru: Joi.string().min(3).required(),
  jenisKelamin: Joi.string().max(6).required(),
});

export default teacherSchema;
