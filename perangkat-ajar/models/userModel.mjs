import bcrypt from "bcrypt";
import db from "../database/knex.mjs";

const saltRounds = 10;
export default class User {
  // 1. make new user
  static async create({ password, ...data }) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const [{ id }] = await db("users")
    .insert({
      password: hashedPassword,
      ...data,
    })
    .returning("id");
    console.log({id});
    return { ...data, id };
  }

  static getAllUser() {
    return db("users").select("*");
  }

  static getUserById(id) {
    return db("users").where({ id }).first();
  }

  static async update(id, data_user) {
    const { password, ...otherData } = data_user;
    const updateData = { ...otherData };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updateData.password = hashedPassword;
    }
    await db("users").where({ id }).update(data_user);
    return { ...updateData, id };
  }

  static async delete(id) {
    await db("users").where({ id }).del();
  }
}
