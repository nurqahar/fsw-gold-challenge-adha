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
    this.nama_siswa = siswa.nama_siswa;
    this.nisn = siswa.nisn;
    this.jenis_kelamin = siswa.jenis_kelamin;
    this.tanggal_diterima = siswa.tanggal_diterima;
    this.asal_sekolah = siswa.asal_sekolah;
    this.nomor_ijazah_smp = siswa.nomor_ijazah_smp;
    this.tahun_ijazah_smp = siswa.tahun_ijazah_smp;
    this.tempat_tanggal_lahir = siswa.tempat_tanggal_lahir;
    this.alamat_siswa = siswa.alamat_siswa;
    this.nomor_telepon_siswa = siswa.nomor_telepon_siswa;
    this.agama = siswa.agama;
    this.anak_ke = siswa.anak_ke;
    this.status_anak = siswa.status_anak;
    this.nama_ayah = siswa.nama_ayah;
    this.pekerjaan_ayah = siswa.pekerjaan_ayah;
    this.nama_ibu = siswa.nama_ibu;
    this.pekerjaan_ibu = siswa.pekerjaan_ibu;
    this.wali_siswa_nama = siswa.wali_siswa_nama;
    this.alamat_orang_tua = siswa.alamat_orang_tua;
    this.telepon_orang_tua = siswa.telepon_orang_tua;
    this.keterangan = siswa.keterangan;
    this.pindah_ke = siswa.pindah_ke;
    this.pindah_dari = siswa.pindah_dari;
    this.kelas_diterima = siswa.kelas_diterima;
    this.semester_diterima = siswa.semester_diterima;
    this.alamat_sekolah = siswa.alamat_sekolah;
    this.tahun_skhun = siswa.tahun_skhun;
    this.nomor_skhun = siswa.nomor_skhun;
    this.alamat_wali_siswa = siswa.alamat_wali_siswa;
    this.telepon_wali_siswa = siswa.telepon_wali_siswa;
    this.pekerjaan_wali_siswa = siswa.pekerjaan_wali_siswa;
  }
  static getAllSiswa() {
    return rows;
  }

  static getSiswaByNis(nis) {
    return rows.find((row) => row.nis === nis);
  }

  static addSiswa(siswa) {
    const newSiswa = new Siswas(siswa);
    rows.push(newSiswa);
    return newSiswa;
  }

  static update(nis, data) {
    const index = rows.findIndex((row) => row.nis === nis);
    if (index !== -1) {
      rows[index] = { nis, ...data };
      return rows[index];
    }
    return null;
  }

  static delete(nis) {
    const index = rows.findIndex((item) => item.nis === nis);
    if (index !== -1) {
      return rows.splice(index, 1);
    }
    return null;
  }
}
