import Teacher from "../models/teacherModel.mjs";
import teacherSchema from "../schema/teacherSchema.mjs";

const DECIMAL = 10;
export const createData = async (req, res) => {
  const { error, value } = teacherSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const id_mata_pelajaran = parseInt(req.params.id, DECIMAL);
  console.log(req.params.id);
  
  try {
    const data = await Teacher.create({ id_mata_pelajaran, ...value });
    return res.status(201).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const getAllData = async (req, res) => {
  const data = await Teacher.getAll();
  return res.json(data);
};

export const getDataById = async (req, res) => {
  const data = await Teacher.getById(parseInt(req.params.id, DECIMAL));
  if (data) {
    return res.json(data);
  }
  return res.status(404).send("guru tidak ditemukan");
};

export const updateData = async (req, res) => {
  const { error, value } = teacherSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const dataId = parseInt(req.params.id, DECIMAL);
  const data = await Teacher.getById(dataId);
  if (!data) return res.status(404).send("guru tidak ditemukan");
  try {
    const updateData = await Teacher.update(dataId, value);
    return res.status(201).json(updateData);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const deleteData = async (req, res) => {
  const dataId = parseInt(req.params.id, DECIMAL);
  const data = await Teacher.getById(dataId);
  if (!data) return res.status(404).send("guru tidak ditemukan");
  await Teacher.delete(parseInt(req.params.id, DECIMAL));
  return res.status(204).send();
};
