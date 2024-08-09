import Joi from "joi";

const teachingNotesSchema = Joi.object({
  presensi: Joi.string().required(),
  materi: Joi.string().required(),
  catatan: Joi.string().optional(),
  jam: Joi.string().required(),
  jumlahJp: Joi.string().required(),
  tanggal: Joi.string().required(),
  tahunAjaran: Joi.string().required(),
  semester: Joi.string().required(),
  nilai: Joi.string().optional(),
});

export default teachingNotesSchema;
