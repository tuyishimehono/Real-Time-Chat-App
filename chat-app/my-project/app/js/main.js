let socket = io();
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  let item = document.createElement("li");
  item.textContent = msg;
  document.getElementById("messages").appendChild(item);
});
