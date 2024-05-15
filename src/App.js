import React, { useState } from "react";

import Web3 from "web3";

import constants from "./constants.json";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://mainnet.infura.io/v3/${constants.infuraKey}`
  )
);

function App() {
  const [sender, setSender] = useState(constants.sender);
  const [receiver, setReceiver] = useState(constants.receiver);
  const [privkey, setPrivkey] = useState("");
  const [amount, setAmount] = useState(0);

  const send = () => {
    const privateKey = privkey;

    // the amount of ether to send
    const sendAmount = web3.utils.toWei(amount, "ether");

    const transaction = {
      from: sender,
      gasPrice: web3.utils.toHex(20 * 1e9),
      gasLimit: web3.utils.toHex(21000),
      to: receiver,
      value: web3.utils.toWei(sendAmount, "ether"),
    };

    web3.eth.accounts
      .signTransaction(transaction, privateKey)
      .then((signedTx) =>
        web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      )
      .then((receipt) => {
        console.log(`Transaction hash: ${receipt.transactionHash}`);
      })
      .catch((err) => console.log(err));
  };
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
      <button className="btn btn-outline-success form-control" onClick={send}>
        Send this amount from sender to receiver
      </button>
    </div>
  );
}

export default App;
