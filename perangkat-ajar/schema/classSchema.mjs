import Joi from "joi";

const classSchema = Joi.object({
  kelas: Joi.string().required(),
});

export default classSchema;
