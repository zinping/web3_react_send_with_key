import React, { useState } from "react";

import constants from "./constants.json";

function App() {
  const [sender, setSender] = useState(constants.sender);
  const [receiver, setReceiver] = useState(constants.receiver);
  const [privkey, setPrivkey] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div className="container mt-4">
      <h3>Please input private key</h3>
      <input
        className="form-control"
        value={privkey}
        onChange={(e) => setPrivkey(e.target.value)}
      ></input>
      <h3>Please input sender address</h3>
      <input
        className="form-control"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      ></input>
      <h3>Please input receiver address</h3>
      <input
        className="form-control"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      ></input>
      <h3>Please input amount</h3>
      <input
        className="form-control"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <br />
      <button className="btn btn-outline-success form-control">
        Send this amount from sender to receiver
      </button>
    </div>
  );
}

export default App;
