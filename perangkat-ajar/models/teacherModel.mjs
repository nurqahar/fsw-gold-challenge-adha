import db from "../database/knex.mjs";

export default class Teacher {
  static async create(data) {
    console.log(data);
    const [{ id_guru }] = await db("id_guru")
      .insert({ data })
      .returning("id_guru");
    return { ...data, id_guru };
  }

  static getAll() {
    return db("id_guru").select("*");
  }

  static getById(id_guru) {
    return db("id_guru").where({ id_guru }).first();
  }

  static async update(id_guru, data) {
    return db("id_guru").where({ id_guru }).update(data);
  }

  static async delete(id_guru) {
    await db("id_guru").where({ id_guru }).del();
  }
}
