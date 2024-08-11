import TeachingNotes from "../models/teachingNotesModel.mjs";
import teachingNotesSchema from "../schema/teachingNotesSchema.mjs";

const DECIMAL = 10;
export const createData = async (req, res) => {
  const { error, value } = teachingNotesSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  siswa_id = parseInt(req.params.id1, DECIMAL);
  kelas_id = parseInt(req.params.id2, DECIMAL);
  mata_pelajaran_id = parseInt(req.params.id3, DECIMAL);
  guru_id = parseInt(req.params.id4, DECIMAL);
  try {
    const data = await TeachingNotes.create({
      siswa_id,
      kelas_id,
      mata_pelajaran_id,
      guru_id,
      ...value,
    });
    return res.status(201).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const getAllData = async (req, res) => {
  const data = await TeachingNotes.getAll();
  return res.json(data);
};

export const getDataById = async (req, res) => {
  const data = await TeachingNotes.getById(parseInt(req.params.id, DECIMAL));
  if (data) {
    return res.json(data);
  }
  return res.status(404).send("catatan mengajar tidak ditemukan");
};

export const updateData = async (req, res) => {
  const { error, value } = teachingNotesSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const dataId = parseInt(req.params.id, DECIMAL);
  const data = await TeachingNotes.getById(dataId);
  if (!data) return res.status(404).send("catatan mengajar tidak ditemukan");
  try {
    const updateData = await TeachingNotes.update(dataId, value);
    return res.status(201).json(updateData);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const deleteData = async (req, res) => {
  const dataId = parseInt(req.params.id, DECIMAL);
  const data = await TeachingNotes.getById(dataId);
  if (!data) return res.status(404).send("catatan mengajar tidak ditemukan");
  await TeachingNotes.delete(parseInt(req.params.id, DECIMAL));
  return res.status(204).send();
};
