import bcrypt from "bcrypt";
import db from "../database/knex.mjs";

const saltRounds = 10;
export default class User {
  // 1. make new user
  static async create({ password, ...data }) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const [{ id_user }] = await db("users")
      .insert({
        password: hashedPassword,
        ...data,
      })
      .returning("id_user");
    return { ...data, id_user };
  }

  static getAllUser() {
    return db("users").select("*");
  }

  static getUserById(id_user) {
    return db("users").where({ id_user }).first();
  }

  static async update(id_user, data_user) {
    const { password, ...otherData } = data_user;
    const updateData = { ...otherData };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updateData.password = hashedPassword;
    }
    await db("users").where({ id_user }).update(data_user);
    return { ...updateData, id_user };
  }

  static async delete(id_user) {
    await db("users").where({ id_user }).del();
  }
}
