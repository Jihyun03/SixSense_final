const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const port = 80;


app.get("/music-data", (req, res)=>{
    console.log("success");
});