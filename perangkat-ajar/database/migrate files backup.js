/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // 1.  kelas
  knex.schema.createTable("kelas", (table) => {
    table.increments("id_kelas");
    table.string("nama_kelas", "255").notNullable();
    table
      .integer("id_mata_pelajaran")
      .unsigned()
      .notNullable()
      .references("id_mata_pelajaran")
      .inTable("mata_pelajaran")
      .onDelete("CASCADE");
    table
      .integer("id_guru")
      .unsigned()
      .notNullable()
      .references("id_guru")
      .inTable("guru")
      .onDelete("CASCADE");
  });

  //   2. guru
  knex.schema.createTable("guru", (table) => {
    table.increments("id_guru");
    table.string("nama_guru", "255").notNullable();
    table.string("jenis_kelamin", "100").notNullable();
    table
      .integer("id_mata_pelajaran")
      .unsigned()
      .notNullable()
      .references("id_mata_pelajaran")
      .inTable("mata_pelajaran")
      .onDelete("CASCADE");
    table
      .integer("id_kelas")
      .unsigned()
      .notNullable()
      .references("id_kelas")
      .inTable("kelas")
      .onDelete("CASCADE");
  });

  //   3. mata pelajaran
  knex.schema.createTable("mata_pelajaran", (table) => {
    table.increments("id_mata_pelajaran");
    table.string("nama_mata_pelajaran", "328").notNullable();
  });

  //   4. siswa
  knex.schema.createTable("siswa", (table) => {
    table.increments("id_siswa");
    table.string("nama_siswa", "328").notNullable();
    table.string("jenis_kelamin", "100").notNullable();
    table
      .integer("id_kelas")
      .unsigned()
      .notNullable()
      .references("id_kelas")
      .inTable("kelas")
      .onDelete("CASCADE");
  });

  //   5. catatan mengajar
  knex.schema.createTable("catatan_mengajar", (table) => {
    table.increments("id_catatan_mengajar");
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
      .integer("id_siswa")
      .unsigned()
      .notNullable()
      .references("id_siswa")
      .inTable("siswa")
      .onDelete("CASCADE");
    table
      .integer("id_kelas")
      .unsigned()
      .notNullable()
      .references("id_kelas")
      .inTable("kelas")
      .onDelete("CASCADE");
    table
      .integer("id_mata_pelajaran")
      .unsigned()
      .notNullable()
      .references("id_mata_pelajaran")
      .inTable("mata_pelajaran")
      .onDelete("CASCADE");
    table
      .integer("id_guru")
      .unsigned()
      .notNullable()
      .references("id_guru")
      .inTable("guru")
      .onDelete("CASCADE");
  });

  //   6. user
  knex.schema.createTable("users", (table) => {
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
