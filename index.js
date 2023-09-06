// creacion de api 
const express = require("express");
const app = express();

app.get("/",  function (request, response) {
	
	response.send("Hello word");
});

app.listen(7777);