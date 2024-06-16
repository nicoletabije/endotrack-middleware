"use strict";
const express = require("express");
const app = express();
const { mediatorConfig } = require("./mediator-config");
const { registerMediator } = require("openhim-mediator-utils");
const openhimConfig = {
  username: "root@openhim.org",
  password: "qwerty01",
  apiURL: "http://127.0.0.1:8080",
  trustSelfSigned: true,
};

registerMediator(openhimConfig, mediatorConfig, (err) => {
  if (err) {
    throw new Error(`Failed to register mediator. Check your Config. ${err}`);
  }
});
app.all("*", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
