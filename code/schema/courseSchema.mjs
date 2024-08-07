import Joi from "joi";

const courseSchema = Joi.object({
  courseName: Joi.string().min(3).required(),
});

export default courseSchema;
