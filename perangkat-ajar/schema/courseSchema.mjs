import Joi from "joi";

const courseSchema = Joi.object({
  mata_pelajaran: Joi.string().required(),
});

export default courseSchema;
