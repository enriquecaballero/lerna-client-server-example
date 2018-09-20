/* eslint-disable no-console */
import express from "express";
import cors from "cors";
import routes from "./routes";

const PORT_NUMBER = 3030;
const app = express();

const server = app.listen(PORT_NUMBER);

app.use(cors());
app.use(routes);

server.on("listening", () => {
  console.log(`Express is listening on port ${PORT_NUMBER}`);
});
