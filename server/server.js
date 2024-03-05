const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mysql = require('mysql');

const app = express();
app.use(express.json())
app.use(cors());

app.listen(3001, ()=> {
    console.log("listening");
})

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);



const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

io.on("connection", (socket) => {
    console.log(`User Connected, id is ${socket.id}`);
    socket.emit("price", 450); //Price will come from Db
    socket.on("newAcceptedBid", (data) => {
        //Update Db with the new bid "(data)", and emit to other browsers.
        socket.broadcast.emit("price", (data));
    });
})

server.listen(PORT, () => {
    console.log("Server running");
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
    const values = [
      req.body.email,
      req.body.password
    ]
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if(err) return res.json("Login Failed");
      return res.json(data);
    })
})