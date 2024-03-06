const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mysql = require('mysql2');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

app.use(cors());
app.use(express.json());

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};
app.use(session(sess));
app.use(routes);
// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.querry(sql, [values], (err, data) => {
//         if(err) {
//             return res.json("Error");
//         }
//         return res.json(data);
//     })
// })

// app.post('/login', (req, res) => {
//     const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
//     db.querry(sql, [req.body.email,req.body.password], (err, data) => {
//         if(err) {
//             return res.json("Error");
//         }
//         if(data.length > 0) {
//             return res.json("Success");
//         } else {
//         return res.json(data);
//     }
// })
// })


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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

  }
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
  
server.listen(PORT, () => {
    console.log(`Server running pn port ${PORT}`);
})

sequelize.sync({ force: false }).then(() => {
    app.listen(8080, () => console.log('Sequelize listening on 8080'));
});