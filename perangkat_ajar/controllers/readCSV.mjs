import fs from "fs";
import { parse } from "csv";
import db from "./tempDB.mjs";

fs.createReadStream("../data/DATA_SISWA.csv")
  .pipe(parse({ delimiter: ";", from_line: 9 }))
  .on("data", function (row) {
    db.serialize(function () {
      db.run(
        `INSERT INTO DATA_SISWA VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
          row[0],
          row[1],
          row[2],
          row[3],
          row[4],
          row[5],
          row[6],
          row[7],
          row[8],
          row[9],
          row[10],
          row[11],
          row[12],
          row[13],
          row[14],
          row[15],
          row[16],
          row[17],
          row[18],
          row[19],
          row[20],
          row[21],
          row[22],
          row[23],
          row[24],
          row[25],
          row[26],
          row[27],
          row[28],
          row[29],
          row[30],
          row[31],
          row[32],
          row[33],
          row[34],
          row[35],
          row[36],
          row[37],
          row[38],
          row[39],
          row[40],
          row[41],
          row[42],
          row[43],
          row[44],
          row[45],
          row[46],
          row[47],
          row[48],
          row[49],
          row[50],
          row[51],
          row[52],
          row[53],
          row[54],
          row[55],
          row[56],
          row[57],
          row[58],
          row[59],
          row[60],
          row[61],
          row[62],
          row[63],
          row[64],
          row[65],
          row[66],
          row[67],
        ],
        function (error) {
          if (error) {
            return console.log(error.message);
          }
          console.log(`Inserted a row with the id: ${this.lastID}`);
        }
      );
    });
  });
