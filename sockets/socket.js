const { io } = require("../server");

const Bands = require("../models/bands");
const Band = require("../models/band");

const bands = new Bands();

bands.addBand(new Band("Queen"));
bands.addBand(new Band("Bon Jovi"));
bands.addBand(new Band("Tesea1"));
bands.addBand(new Band("Queen23"));

console.log("init Server");

// Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Client connection");

  client.emit("active-bands", bands.getBands());

  client.on("disconnect", () => {
    console.log("Client disconnect");
  });

  client.on("message", (payload) => {
    console.log("Message!!!", payload);
    io.emit("message", { admin: "Nuevo message" });
  });

  client.on("vote-band", (payload) => {
    bands.voteBand(payload.id);
    io.emit("active-bands", bands.getBands());
  });

  client.on("add-band", (payload) => {
    const newBand = new Band(payload.name);
    bands.addBand(newBand);
    io.emit("active-bands", bands.getBands());
  });
  client.on("delete-band", (payload) => {
    bands.deleteBand(payload.id);
    io.emit("active-bands", bands.getBands());
  });
  // client.on("send-message", (payload) => {
  //   console.log(payload);
  //   // io.emit("new-message", payload); // 모든 사람에게 발송
  //   client.broadcast.emit("new-message", payload); // 발송한 사람을 제외한 모든 인원
  // });
});
