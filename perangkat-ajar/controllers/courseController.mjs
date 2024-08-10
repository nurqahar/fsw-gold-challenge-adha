import Course from "../models/courseModel.mjs";
import courseSchema from "../schema/courseSchema.mjs";

const DECIMAL = 10;
export const createData = async (req, res) => {
  const { error, value } = courseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  console.log(value);
  try {
    const data = await Course.create(value);

    return res.status(201).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const getAllData = async (req, res) => {
  const data = await Course.getAll();
  return res.json(data);
};

export const getDataById = async (req, res) => {
  const data = await Course.getById(parseInt(req.params.id, DECIMAL));
  if (data) {
    return res.json(data);
  }
  return res.status(404).send("mata pelajaran tidak ditemukan");
};

export const updateData = async (req, res) => {
  const { error, value } = courseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const dataId = parseInt(req.params.id, DECIMAL);
  const data = await Course.getById(dataId);
  if (!data) return res.status(404).send("mata pelajaran tidak ditemukan");
  try {
    const updateData = await Course.update(dataId, value);
    return res.status(201).json(updateData);
  } catch (err) {
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const deleteData = async (req, res) => {
  const dataId = parseInt(req.params.id, DECIMAL);
  const data = await Course.getById(dataId);
  if (!data) return res.status(404).send("mata pelajaran tidak ditemukan");

  await Course.delete(parseInt(req.params.id, DECIMAL));
  return res.status(204).send();
};
