// creacion de api 
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola a todos desde el servidor BEDU!");
});

app.listen(7777, () => {
  "> Escuchando en el puerto 8341";
});