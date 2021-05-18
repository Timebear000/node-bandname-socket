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

  client.on("send-message", (payload) => {
    // io.emit("new-message", payload); // 모든 사람에게 발송
    client.broadcast.emit("new-message", payload); // 발송한 사람을 제외한 모든 인원
  });
});
