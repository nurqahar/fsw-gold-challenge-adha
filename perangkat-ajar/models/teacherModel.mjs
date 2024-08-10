import db from "../database/knex.mjs";

export default class Teacher {
  static async create(data) {
    console.log(data);
    const [{ id_guru }] = await db("guru")
      .insert({ data })
      .returning("id_guru");
    return { ...data, id_guru };
  }

  static getAll() {
    return db("guru").select("*");
  }

  static getById(id_guru) {
    return db("guru").where({ id_guru }).first();
  }

  static async update(id_guru, data) {
    return db("guru").where({ id_guru }).update(data);
  }

  static async delete(id_guru) {
    await db("guru").where({ id_guru }).del();
  }
}
