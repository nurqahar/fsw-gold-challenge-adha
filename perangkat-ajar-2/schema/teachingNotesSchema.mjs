import Joi from "joi";

const teachingNotesSchema = Joi.object({
  presensi: Joi.string().required(),
  materi: Joi.string().required(),
  catatan: Joi.string().optional(),
  jam: Joi.string().required(),
  jumlah_jp: Joi.string().required(),
  tanggal: Joi.string().required(),
  tahun_ajaran: Joi.string().required(),
  semester: Joi.string().required(),
  nilai: Joi.string().optional(),
});

export default teachingNotesSchema;
