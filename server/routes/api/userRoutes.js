const router = require('express').Router();
const { User } = require('../../models');



// // CREATE a user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log(userData.id);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;