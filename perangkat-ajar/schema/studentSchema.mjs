import Joi from "joi";

const studentSchema = Joi.object({
  studentName: Joi.string().min(3).required(),
  sex: Joi.string().max(6).required(),
});

export default studentSchema;
