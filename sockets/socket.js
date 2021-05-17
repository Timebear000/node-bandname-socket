const { io } = require("../server");
// Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Client connection");

  client.on("disconnect", () => {
    console.log("Client disconnect");
  });

  client.on("message", (payload) => {
    console.log("Message!!!", payload);
    io.emit("message", { admin: "Nuevo message" });
  });
});
