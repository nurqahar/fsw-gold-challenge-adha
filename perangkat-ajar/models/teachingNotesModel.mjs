import db from "../database/knex.mjs";

export default class TeachingNotes {
  static async create(data) {
    const [{ id_catatan_mengajar }] = await db("mata_pelajaran")
      .insert({ data })
      .returning("id_catatan_mengajar");
    return { ...data, id_catatan_mengajar };
  }

  static getAll() {
    return db("mata_pelajaran").select("*");
  }

  static getById(id_catatan_mengajar) {
    return db("mata_pelajaran").where({ id_catatan_mengajar }).first();
  }

  static async update(id_catatan_mengajar, data) {
    return db("mata_pelajaran").where({ id_catatan_mengajar }).update(data);
  }

  static async delete(id_catatan_mengajar) {
    await db("mata_pelajaran").where({ id_catatan_mengajar }).del();
  }
}
