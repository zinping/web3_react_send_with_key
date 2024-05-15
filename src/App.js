function App() {
  return (
    <div className="container mt-4">
      <h2>Please input private key</h2>
      <input className="form-control"></input>
      <h2>Please input sender address</h2>
      <input className="form-control"></input>
      <h2>Please input receiver address</h2>
      <input className="form-control"></input>
      <h2>Please input amount</h2>
      <input className="form-control"></input>
      <button className="btn btn-outline-success">Send</button>
    </div>
  );
}

export default App;
