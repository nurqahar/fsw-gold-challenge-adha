import logo from "./logo.svg";
import "./App.css";
// import express from "express";
// import routes from "../routes/index.mjs";
// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// const options = {
//   definition: {
//     openapi: "3.1.0",
//     info: {
//       title: "Express API with Swagger",
//       version: "0.1.0",
//       description: "Membuat perangkat ajar yang dapat membuat catatan mengajar",
//       license: {
//         name: "MIT",
//         url: "https://spdx.org/licenses/MIT.html",
//       },
//       contact: {
//         name: "Adha Nur Qahar",
//         url: "https://github.com",
//         email: "adha.nur.qahar@gmail.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//   },
//   apis: ["./routes/*.mjs"],
// };
// const specs = swaggerJsdoc(options);
// const CSS_URL =
//   "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use("/api", routes);
// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs, { explorer: true, customCssUrl: CSS_URL })
// );
// app.listen(port, () => {
//   console.log(`API run at http://localhost:${port}/api/`);
// });

export default App;
