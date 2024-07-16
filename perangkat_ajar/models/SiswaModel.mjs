//daftar kelas & daftar siswa
//method: getAllSiswa, addSiswa, modifiedSiswa

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let rows = [];
import sqlite3 from "sqlite3";
import Message from "../message/message.mjs";
const message = new Message();
let dbPath = `${__dirname}\\data_siswa.db`;

const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error(error.message);
  }
  console.log(`Connected to ${dbPath} Database!`);
});

db.serialize(() => {
  db.each(`SELECT * FROM DATA_SISWA`, (error, rowObj) => {
    if (error) {
      console.error(error.message);
    }
    rows.push(rowObj);
  });
});

export class Siswas {
  constructor(siswa) {
    this.nis = siswa.nis;
    this.kelas = siswa.kelas;
    this.nama = siswa.nama;
  }
  static getAllSiswa() {
    return rows;
  }

  static getSiswaByNis(nis) {
    return rows.find((row) => row.nis === nis);
  }
}
