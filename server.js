const express = require("express");

const path = require("path"); //공용 디렉터리 라이브러리
require("dotenv").config(); //환경설정 파일 셋팅

// App de Express
const app = express();

// Node Sever
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./sockets/socket");

//공용 디렉터리 설정
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("Running Server en puerto", process.env.PORT);
});
