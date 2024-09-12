import Joi from "joi";

const courseSchema = Joi.object({
  mataPelajaran: Joi.string().required(),
});

export default courseSchema;
