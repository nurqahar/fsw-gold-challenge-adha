import Joi from "joi";

const studentSchema = Joi.object({
  siswa: Joi.string().min(3).required(),
  jenis_kelamin: Joi.string().max(6).required(),
});

export default studentSchema;
