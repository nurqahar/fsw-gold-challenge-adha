import Joi from "joi";

const classSchema = Joi.object({
  namaKelas: Joi.string().required(),
});

export default classSchema;
