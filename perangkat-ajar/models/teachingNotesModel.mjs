import db from "../database/knex.mjs";

export default class TeachingNotes {
  static async create(data) {
    const [{ id }] = await db("catatan_mengajar")
      .insert({ ...data })
      .returning("id");
    return { id, ...data };
  }

  static getAll() {
    return db("catatan_mengajar").select("*");
  }

  static getById(id) {
    return db("catatan_mengajar").where({ id }).first();
  }

  static async update(id, data) {
    return db("catatan_mengajar").where({ id }).update(data);
  }

  static async delete(id) {
    await db("catatan_mengajar").where({ id }).del();
  }
}
