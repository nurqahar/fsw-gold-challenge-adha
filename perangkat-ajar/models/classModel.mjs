import db from "../database/knex.mjs";

export default class Class {
  static async create(data) {
    const [{ id_kelas }] = await db("kelas")
      .insert({ data })
      .returning("id_kelas");
    return { ...data, id_kelas };
  }

  static getAll() {
    return db("kelas").select("*");
  }

  static getById(id_kelas) {
    return db("kelas").where({ id_kelas }).first();
  }

  static async update(id_kelas, data) {
    return db("kelas").where({ id_kelas }).update(data);
  }

  static async delete(id_kelas) {
    await db("kelas").where({ id_kelas }).del();
  }
}
