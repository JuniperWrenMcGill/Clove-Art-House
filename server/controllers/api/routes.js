const router = require('express').Router();
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
       res.render('first')
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
  // if (req.session.logged_in) {
  //     res.redirect('/');
  //     return;
  // }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // if (req.session.logged_in) {
  //     res.redirect('/');
  //     return;
  // }
  res.render('signup');
});

router.get('/home', (req, res) => {
  res.render('second');
});

module.exports = router;
