import db from "../database/knex.mjs";

export default class Teacher {
  static async create(data) {
    const [{ id_guru }] = await db("mata_pelajaran")
      .insert({ data })
      .returning("id_guru");
    return { ...data, id_guru };
  }

  static getAll() {
    return db("mata_pelajaran").select("*");
  }

  static getById(id_guru) {
    return db("mata_pelajaran").where({ id_guru }).first();
  }

  static async update(id_guru, data) {
    return db("mata_pelajaran").where({ id_guru }).update(data);
  }

  static async delete(id_guru) {
    await db("mata_pelajaran").where({ id_guru }).del();
  }
}
