import db from "../database/knex.mjs";

export default class Teacher {
  static async create(data) {
    console.log(data);
    const [{ id }] = await db("guru")
      .insert({ ...data })
      .returning("id");
    return { ...data, id };
  }

  static getAll() {
    return db("guru").select("*");
  }

  static getById(id) {
    return db("guru").where({ id }).first();
  }

  static async update(id, data) {
    return db("guru").where({ id }).update(data);
  }

  static async delete(id) {
    await db("guru").where({ id }).del();
  }
}
