//daftar kelas & daftar siswa
//method: getAllSiswa, addSiswa, modifiedSiswa
import Message from "../message/message.mjs";
const message = new Message();
class SiswaModel {
  constructor() {
    this.X_TOI_1 = [
      [1, Derick, 1187],
      [2, Alonso, 1188],
      [3, Ronald, 1189],
      [4, Jonah, 1190],
      [5, Jonas, 1191],
      [6, Ronan, 1192],
      [7, Demetrius, 1193],
      [8, Braxton, 1194],
      [9, Isiah, 1195],
      [10, Tristin, 1196],
      [11, Damian, 1197],
      [12, Ronin, 1198],
      [13, Nikolai, 1199],
      [14, Miguel, 1200],
      [15, Landon, 1201],
      [16, Moses, 1202],
      [17, Felipe, 1203],
      [18, Brent, 1204],
      [19, Jimmy, 1205],
      [20, Ismael, 1206],
      [21, Ulises, 1207],
      [22, Cale, 1208],
      [23, Antoine, 1209],
      [24, Reagan, 1210],
      [25, Emilio, 1211],
      [26, Mathias, 1212],
      [27, Mekhi, 1213],
      [28, Jasiah, 1214],
      [29, Craig, 1215],
      [30, Caleb, 1216],
    ];
    this.X_TOI_2 = [
      [1, Luis, 1217],
      [2, Paxton, 1218],
      [3, Remington, 1219],
      [4, Darian, 1220],
      [5, Aron, 1221],
      [6, Drew, 1222],
      [7, Bryan, 1223],
      [8, Leonard, 1224],
      [9, Camryn, 1225],
      [10, Owen, 1226],
      [11, Keyon, 1227],
      [12, Tate, 1228],
      [13, Alden, 1229],
      [14, Bronson, 1230],
      [15, Armando, 1231],
      [16, Christopher, 1232],
      [17, Kayden, 1233],
      [18, Jamie, 1234],
      [19, Scott, 1235],
      [20, Trevon, 1236],
      [21, Nehemiah, 1237],
      [22, Carlos, 1238],
      [23, Alec, 1239],
      [24, Terrence, 1240],
      [25, Agustin, 1241],
      [26, Donald, 1242],
      [27, Angel, 1243],
      [28, Ian, 1244],
      [29, Caden, 1245],
      [30, Emery, 1246],
    ];
    this.XI_TOI_1 = [
      [1, Ezra, 1247],
      [2, Cash, 1248],
      [3, Damarion, 1249],
      [4, Derek, 1250],
      [5, Isiah, 1251],
      [6, Carsen, 1252],
      [7, Maverick, 1253],
      [8, Harper, 1254],
      [9, Matteo, 1255],
      [10, Justin, 1256],
      [11, Harry, 1257],
      [12, Derick, 1258],
      [13, Roland, 1259],
      [14, Simon, 1260],
      [15, Asa, 1261],
      [16, Gerardo, 1262],
      [17, Trent, 1263],
      [18, Conner, 1264],
      [19, Oliver, 1265],
      [20, Colin, 1266],
      [21, Casey, 1267],
      [22, Mekhi, 1268],
      [23, Heath, 1269],
      [24, Tyree, 1270],
      [25, Brock, 1271],
      [26, Antony, 1272],
      [27, Immanuel, 1273],
      [28, Peter, 1274],
      [29, Joaquin, 1275],
      [30, Cason, 1276],
    ];
    this.XI_TOI_2 = [
      [1, Adam, 1277],
      [2, Bo, 1278],
      [3, Elisha, 1279],
      [4, Kristian, 1280],
      [5, Anderson, 1281],
      [6, Finley, 1282],
      [7, Malcolm, 1283],
      [8, Jordyn, 1284],
      [9, Brady, 1285],
      [10, Zachery, 1286],
      [11, Ronan, 1287],
      [12, Henry, 1288],
      [13, Soren, 1289],
      [14, Ronnie, 1290],
      [15, Myles, 1291],
      [16, Tomas, 1292],
      [17, Adrian, 1293],
      [18, Diego, 1294],
      [19, Keenan, 1295],
      [20, Everett, 1296],
      [21, Pierce, 1297],
      [22, Robert, 1298],
      [23, Wilson, 1299],
      [24, Payton, 1300],
      [25, Declan, 1301],
      [26, Ali, 1302],
      [27, Preston, 1303],
      [28, Tate, 1304],
      [29, Abraham, 1305],
      [30, Maverick, 1306],
    ];
    this.XII_TOI_1 = [
      [1, Enzo, 1307],
      [2, Jose, 1308],
      [3, Roland, 1309],
      [4, Evan, 1310],
      [5, Brian, 1311],
      [6, Tanner, 1312],
      [7, Nash, 1313],
      [8, Thaddeus, 1314],
      [9, Ralph, 1315],
      [10, Weston, 1316],
      [11, Mohammed, 1317],
      [12, Santino, 1318],
      [13, Kaeden, 1319],
      [14, Jonas, 1320],
      [15, Yahir, 1321],
      [16, Chace, 1322],
      [17, Jovanny, 1323],
      [18, Cael, 1324],
      [19, Hunter, 1325],
      [20, Benjamin, 1326],
      [21, Marco, 1327],
      [22, Davis, 1328],
      [23, Dominick, 1329],
      [24, Keon, 1330],
      [25, Yusuf, 1331],
      [26, Corey, 1332],
      [27, Kian, 1333],
      [28, Caden, 1334],
      [29, Jamarcus, 1335],
      [30, Blaze, 1336],
    ];
    this.XII_TOI_2 = [
      [1, Freddy, 1337],
      [2, Roman, 1338],
      [3, Aidan, 1339],
      [4, Micah, 1340],
      [5, Guillermo, 1341],
      [6, Spencer, 1342],
      [7, Larry, 1343],
      [8, Chaim, 1344],
      [9, Josue, 1345],
      [10, Heath, 1346],
      [11, Jeramiah, 1347],
      [12, Reece, 1348],
      [13, Kameron, 1349],
      [14, Brock, 1350],
      [15, Rashad, 1351],
      [16, Stanley, 1352],
      [17, Marcos, 1353],
      [18, Solomon, 1354],
      [19, Giovanni, 1355],
      [20, Angel, 1356],
      [21, Trevin, 1357],
      [22, Roberto, 1358],
      [23, Messiah, 1359],
      [24, Keon, 1360],
      [25, Amare, 1361],
      [26, Carmelo, 1362],
      [27, Mohamed, 1363],
      [28, Derek, 1364],
      [29, Shawn, 1365],
      [30, Terrence, 1366],
    ];
  }

  getAllSiswa(kelas) {
    let result = [];
    switch (kelas) {
      case "X TOI 1":
        result = this.X_TOI_1;
        break;
      case "X TOI 2":
        result = this.X_TOI_2;
        break;

      case "XI TOI 1":
        result = this.XI_TOI_1;
        break;
      case "XI TOI 2":
        result = this.XI_TOI_2;
        break;

      case "XII TOI 1":
        result = this.XII_TOI_1;
        break;
      case "XII TOI 2":
        result = this.XII_TOI_2;
        break;

      default:
        result = message.notFound();
        break;
    }
    return result;
  }

  addSiswa(kelas) {}
}
export default SiswaModel;
