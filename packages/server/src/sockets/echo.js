/* eslint-disable no-console */
export default class Echo {
  constructor(io) {
    this.namespace = io.of("/ws/echo");
    this.namespace.on("connection", this.onConnect);
  }
  onConnect = socket => {
    this.socket = socket;
    socket.on("message", this.onMessage);
    socket.on("disconnect", this.onDisconnect);
  };
  onMessage = message => {
    const { namespace } = this;
    namespace.emit("message", message);
  };
  onDisconnect = () => {
    console.log("Disconnected from '/ws/echo'");
  };
}
