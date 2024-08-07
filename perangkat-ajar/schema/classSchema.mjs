import joi from "joi";

const classSchema = Joi.object({
  className: Joi.string().required(),
});

export default classSchema;
