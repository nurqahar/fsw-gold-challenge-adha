import db from "../database/knex.mjs";

export default class Student {
  static async create(data) {
    const [{ id_siswa }] = await db("siswa")
      .insert({ data })
      .returning("id_siswa");
    return { ...data, id_siswa };
  }

  static getAll() {
    return db("siswa").select("*");
  }

  static getById(id_siswa) {
    return db("siswa").where({ id_siswa }).first();
  }

  static async update(id_siswa, data) {
    return db("siswa").where({ id_siswa }).update(data);
  }

  static async delete(id_siswa) {
    await db("siswa").where({ id_siswa }).del();
  }
}
