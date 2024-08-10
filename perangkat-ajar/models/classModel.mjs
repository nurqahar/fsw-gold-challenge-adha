import db from "../database/knex.mjs";

export default class Class {
  static async create(data) {
    const [{ id }] = await db("kelas")
      .insert({ ...data })
      .returning("id");
    return { ...data, id };
  }

  static getAll() {
    return db("kelas").select("*");
  }

  static getById(id) {
    return db("kelas").where({ id }).first();
  }

  static async update(id, data) {
    return db("kelas").where({ id }).update(data);
  }

  static async delete(id) {
    await db("kelas").where({ id }).del();
  }
}
