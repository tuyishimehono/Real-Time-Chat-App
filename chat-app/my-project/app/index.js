const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./welcome/welcome");
});

io.on("connection", (socket) => {
  socket.on("incoming message:chat message", (data) => {
    io.emit("incoming message: chat message", data);
  });
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
