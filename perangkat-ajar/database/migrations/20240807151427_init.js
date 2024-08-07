/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  //   6. user
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username", "255").notNullable();
    table.string("email", "328").notNullable().unique();
    table.string("password").notNullable();
    table.timestamp("createdAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("updateAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("users");
};
