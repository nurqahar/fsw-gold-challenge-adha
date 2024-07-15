import fs from "fs";
import sqlite3 from "sqlite3";
const filepath = "./data_siswa.db";

function connectDB() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.log(error.message);
      }
      createTable(db);
      return "Connected to the database successfully!!";
    });
    return db;
  }
}

function createTable(db) {
  db.exec(`
        CREATE TABLE DATA_SISWA
        (
        no                      VARCHAR(100),
        nis                      int NOT NULL PRIMARY KEY,
        nisn                     VARCHAR(100),
        nik                      VARCHAR(100),
        no_un_sebelumnya         VARCHAR(100),
        pin                      VARCHAR(100),
        nama                     VARCHAR(100),
        panggilan                VARCHAR(100),
        kelamin                  VARCHAR(100),
        tahun_masuk              VARCHAR(100),
        asal_sekolah             VARCHAR(100),
        no_ijasah                VARCHAR(100),
        tgl_ijasah               VARCHAR(100),
        tempat_tanggal_lahir     VARCHAR(100),
        alamat_1                   VARCHAR(100),
        kode_pos                 VARCHAR(100),
        jarak                    VARCHAR(100),
        telpon_1                   VARCHAR(100),
        hp                       VARCHAR(100),
        email_1                  NVARCHAR(255),
        status                   VARCHAR(100),
        kondisi                  VARCHAR(100),
        kesehatan                VARCHAR(100),
        bahasa                   VARCHAR(100),
        suku                     VARCHAR(100),
        agama                    VARCHAR(100),
        warga                    VARCHAR(100),
        berat                    VARCHAR(100),
        tinggi                   VARCHAR(100),
        gol_darah                VARCHAR(100),
        anak_ke                  VARCHAR(100),
        bersaudara               VARCHAR(100),
        status_anak              VARCHAR(100),
        jml_saudara_kandung      VARCHAR(100),
        jml_saudara_tiri         VARCHAR(100),
        ayah                     VARCHAR(100),
        status_ayah              VARCHAR(100),
        tmp_lahir_ayah           VARCHAR(100),
        tgl_lahir_ayah           VARCHAR(100),
        email_2                    VARCHAR(100),
        pin_ayah                 VARCHAR(100),
        pendidikan_ayah               VARCHAR(100),
        pekerjaan_ayah                VARCHAR(100),
        penghasilan_ayah             VARCHAR(100),
        ibu                      VARCHAR(100),
        status_ibu               VARCHAR(100),
        tmp_lahir_ibu            VARCHAR(100),
        tgl_lahir_ibu            VARCHAR(100),
        email_3                    VARCHAR(100),
        pin_ibu                  VARCHAR(100),
        pendidikan_ibu               VARCHAR(100),
        pekerjaan_ibu                VARCHAR(100),
        penghasilan_ibu              VARCHAR(100),
        nama_wali                VARCHAR(100),
        alamat_2                   VARCHAR(100),
        telpon_2                   VARCHAR(100),
        hp_1                     VARCHAR(100),
        hp_2                     VARCHAR(100),
        hp_3                     VARCHAR(100),
        hobi                     VARCHAR(100),
        keterangan               VARCHAR(100),
        no_pendf                 VARCHAR(100),
        seragam                  VARCHAR(100),
        kaos_olahraga            VARCHAR(100),
        jas_almamater            VARCHAR(100),
        wearpack                 VARCHAR(100),
        sepatu                   VARCHAR(100)
        )`);
}

export default connectDB();
