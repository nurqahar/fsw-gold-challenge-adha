import Joi from "joi";

const studentSchema = Joi.object({
  siswa: Joi.string().min(3).required(),
  jenis_kelamin: Joi.string().required(),
});

export default studentSchema;
