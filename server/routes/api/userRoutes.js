const router = require('express').Router();
const { User } = require('../../models');



// // CREATE a user
router.post('/', async (req, res) => {
    res.json("done");
    // try {
    //   const userData = await User.create(req.body);
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
    //     res.status(200).json(userData);
    //   });
    // } catch (err) {
    //   res.status(400).json(err);
    // }
  });

// // DELETE a trip
// router.delete('/:id', async (req, res) => {
//   try {
//     const tripData = await Trip.destroy({
//       where: { id: req.params.id }
//     });
//     if (!tripData) {
//       res.status(404).json({ message: 'No trip with this id!' });
//       return;
//     }
//     res.status(200).json(tripData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;