import express from "express";
const app = express();
const port = 3000;
import Message from "./message/message.mjs";
const message = new Message();
import router from "./router.mjs";

// setting
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route page to router
app.use("/", router);

// listen to client
app.listen(port, () => {
  console.log(message.listen(port));
});
