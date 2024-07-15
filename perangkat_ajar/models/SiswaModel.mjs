//daftar kelas & daftar siswa
//method: getAllSiswa, addSiswa, modifiedSiswa
import sqlite3 from "sqlite3";
import Message from "../message/message.mjs";
const message = new Message();
let dbPath = "../controllers/data_siswa.db";
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (error) => {
  if (error) {
    console.error(error.message);
  }
  console.log(`Connected to ${dbPath} Database!`);
});
db.serialize(() => {
  db.each(`SELECT * FROM DATA_SISWA`, (error, row) => {
    if (error) {
      console.error(error.message);
    }
    console.log(row.nis + "\t" + row.nama);
  });
});

export class SiswaModel {
  constructor() {}
  getAllSiswa(kelas) {}

  addSiswa(kelas) {}
}
