import db from "../database/knex.mjs";

export default class Student {
  static async create(data) {
    const [{ id_siswa }] = await db("mata_pelajaran")
      .insert({ data })
      .returning("id_siswa");
    return { ...data, id_siswa };
  }

  static getAll() {
    return db("mata_pelajaran").select("*");
  }

  static getById(id_siswa) {
    return db("mata_pelajaran").where({ id_siswa }).first();
  }

  static async update(id_siswa, data) {
    return db("mata_pelajaran").where({ id_siswa }).update(data);
  }

  static async delete(id_siswa) {
    await db("mata_pelajaran").where({ id_siswa }).del();
  }
}
