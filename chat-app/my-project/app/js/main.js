let socket = io();
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    const timestamp = new Date().toLocaleTimeString();
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (data) {
  let item = document.createElement("li");
  item.textContent = `${data.timestamp} - ${data.message}`;
  document.getElementById("messages").appendChild(item);
});
