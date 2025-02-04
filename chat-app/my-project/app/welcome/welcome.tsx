export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autoComplete="off" />
        <button>Send</button>
      </form>
      <script src="/socket.io/socket.io.js"></script>
      <script src="./js/main.js"></script>
    </main>
  );
}
