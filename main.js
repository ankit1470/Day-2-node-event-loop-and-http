const express = require('express');
const app = express();



app.get("", function (req, res) {
  res.send("Hello");
});

app.get("/books", function (req, res) {
const data=require("./books.json")
res.send(data);
});

app.listen(1234,() => {
    console.log('listening on port 1234')                
})

