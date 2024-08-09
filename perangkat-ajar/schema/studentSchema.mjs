import Joi from "joi";

const studentSchema = Joi.object({
  namaSiswa: Joi.string().min(3).required(),
  jenisKelamin: Joi.string().max(6).required(),
});

export default studentSchema;
