import { Siswas } from "../models/SiswaModel.mjs";
import Message from "../message/message.mjs";

export const getSiswas = (request, response) => {
  response.json(Siswas.getAllSiswa());
};

export const getSiswaByNis = (request, response) => {
  const siswa = Siswas.getSiswaByNis(parseInt(request.params.nis));
  if (siswa) {
    response.json(siswa);
  } else {
    response.status(400).send("Siswa Not Found!");
  }
};
