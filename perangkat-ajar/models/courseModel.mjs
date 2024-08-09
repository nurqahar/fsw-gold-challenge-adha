import db from "../database/knex.mjs";

export default class Course {
  static async create(data) {
    const [{ id_mata_pelajaran }] = await db("mata_pelajaran")
      .insert({ data })
      .returning("id_mata_pelajaran");
    return { ...data, id_mata_pelajaran };
  }

  static getAll() {
    return db("mata_pelajaran").select("*");
  }

  static getById(id_mata_pelajaran) {
    return db("mata_pelajaran").where({ id_mata_pelajaran }).first();
  }

  static async update(id_mata_pelajaran, data) {
    return db("mata_pelajaran").where({ id_mata_pelajaran }).update(data);
  }

  static async delete(id_mata_pelajaran) {
    await db("mata_pelajaran").where({ id_mata_pelajaran }).del();
  }
}
