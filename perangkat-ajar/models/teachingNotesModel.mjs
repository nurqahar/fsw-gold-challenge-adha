import db from "../database/knex.mjs";

export default class TeachingNotes {
  static async create(data) {
    const [{ id }] = await db("teaching_notes")
      .insert({ ...data })
      .returning("id");
    return { id, ...data };
  }

  static getAll() {
    return db("teaching_notes").select("*");
  }

  static getById(id) {
    return db("teaching_notes").where({ id }).first();
  }

  static async update(id, data) {
    return db("teaching_notes").where({ id }).update(data);
  }

  static async delete(id) {
    await db("teaching_notes").where({ id }).del();
  }
}
