/* eslint-disable no-console */
import express from "express";
import cors from "cors";
import socketio from "socket.io";
import routes from "./routes";
import sockets from "./sockets";

const PORT_NUMBER = 3030;
const app = express();

const server = app.listen(PORT_NUMBER);
const io = socketio(server);

app.use(cors());
app.use(routes);

app.set("io", sockets(io));

server.on("listening", () => {
  console.log(`Express is listening on port ${PORT_NUMBER}`);
});
