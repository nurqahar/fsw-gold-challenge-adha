import express from "express";
const app = express();
const port = 3000;
import Message from "./message/message.mjs";
const message = new Message();
import router from "./routes/router.mjs";

// setting
app.use(express.json());

// route page to router
app.use("/api", router);

// listen to client
app.listen(port, () => {
  console.log(message.listenApi(port));
});
