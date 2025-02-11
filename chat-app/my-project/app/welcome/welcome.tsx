export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="h-60 bg-blue-600">
        <h1>{`<>DevRooms</>`}</h1>
        <input placeholder="Username..." />
        <select>
          <option>-- Select Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>

        <button className="btn btn-secondary">Join Room</button>
      </div>
      <script src="/socket.io/socket.io.js"></script>
      <script src="./js/main.js"></script>
    </main>
  );
}
