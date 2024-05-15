function App() {
  return (
    <div className="container mt-4">
      <h3>Please input private key</h3>
      <input className="form-control"></input>
      <h3>Please input sender address</h3>
      <input className="form-control"></input>
      <h3>Please input receiver address</h3>
      <input className="form-control"></input>
      <h3>Please input amount</h3>
      <input className="form-control"></input>
      <br />
      <button className="btn btn-outline-success form-control">
        Send this amount from sender to receiver
      </button>
    </div>
  );
}

export default App;
