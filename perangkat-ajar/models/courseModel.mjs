import db from "../database/knex.mjs";

export default class Course {
  static async create(data) {
    const [{ id }] = await db("mata_pelajaran")
      .insert({ data })
      .returning("id");
    return { ...data, id };
  }

  static getAll() {
    return db("mata_pelajaran").select("*");
  }

  static getById(id) {
    return db("mata_pelajaran").where({ id }).first();
  }

  static async update(id, data) {
    return db("mata_pelajaran").where({ id }).update(data);
  }

  static async delete(id) {
    await db("mata_pelajaran").where({ id }).del();
  }
}
