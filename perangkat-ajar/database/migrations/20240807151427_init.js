/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function up(knex) {
  //   1. mata pelajaran
  await knex.schema.createTable("mata_pelajaran", (table) => {
    table.increments("id");
    table.string("nama_mata_pelajaran", "328").notNullable();
  });

  //   2. guru
  await knex.schema.createTable("guru", (table) => {
    table.increments("id");
    table.string("nama_guru", "255").notNullable();
    table.string("jenis_kelamin", "100").notNullable();
    table
      .integer("mata_pelajaran_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("mata_pelajaran")
      .onDelete("CASCADE");
  });

  // 4.  kelas
  await knex.schema.createTable("kelas", (table) => {
    table.increments("id");
    table.string("nama_kelas", "255").notNullable();
    table
      .integer("mata_pelajaran_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("mata_pelajaran")
      .onDelete("CASCADE");
    table
      .integer("guru_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("guru")
      .onDelete("CASCADE");
  });

  //   4. siswa
  await knex.schema.createTable("siswa", (table) => {
    table.increments("id");
    table.string("nama_siswa", "328").notNullable();
    table.string("jenis_kelamin", "100").notNullable();
    table
      .integer("kelas_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("kelas")
      .onDelete("CASCADE");
  });

  //   5. catatan mengajar
  await knex.schema.createTable("catatan_mengajar", (table) => {
    table.increments("id");
    table.string("presensi", "100").notNullable();
    table.string("materi", "328").notNullable();
    table.string("catatan", "328").notNullable();
    table.string("jam", "100").notNullable();
    table.string("jumlah_jp", "100").notNullable();
    table.string("tanggal", "100").notNullable();
    table.string("tahun_ajaran", "100").notNullable();
    table.string("semester", "100").notNullable();
    table.string("nilai", "100").notNullable();
    table
      .integer("siswa_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("siswa")
      .onDelete("CASCADE");
    table
      .integer("kelas_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("kelas")
      .onDelete("CASCADE");
    table
      .integer("mata_pelajaran_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("mata_pelajaran")
      .onDelete("CASCADE");
    table
      .integer("guru_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("guru")
      .onDelete("CASCADE");
  });

  //   6. user
  await knex.schema.createTable("users", (table) => {
    table.increments("id_user");
    table.string("username", "255").notNullable();
    table.string("email", "328").notNullable().unique();
    table.string("password").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("kelas");
  knex.schema.dropTable("guru");
  knex.schema.dropTable("mata_pelajaran");
  knex.schema.dropTable("siswa");
  knex.schema.dropTable("catatan_mengajar");
  knex.schema.dropTable("users");
};
