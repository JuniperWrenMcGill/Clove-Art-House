const router = require('express').Router();
const { User } = require('../../models');

// router.post('/account', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/account', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { username: req.body.username } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });


// const db= mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "signup"
// })

// app.post('/account', (req, res) => {
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
//     const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
//     const values = [
//       req.body.email,
//       req.body.password
//     ]
//     debugger.query(sql, [values], (err, data) => {
//       if(err) return res.json("Login Failed");
//       return res.json(data);
//     })
// })

module.exports = router;