import db from "../database/knex.mjs";

export default class Student {
  static async create(data) {
    const [{ id }] = await db("siswa")
      .insert({ ...data })
      .returning("id");
    return { id, ...data };
  }

  static getAll() {
    return db("siswa").select("*");
  }

  static getById(id) {
    return db("siswa").where({ id }).first();
  }

  static async update(id, data) {
    return db("siswa").where({ id }).update(data);
  }

  static async delete(id) {
    await db("siswa").where({ id }).del();
  }
}
