const express = require("express");
const router = express.Router();
const {
  getBootcamp,
  createBootcamps,
  getBootcamps,
  updateBootcamps,
  deleteBootcamps,
} = require("../controllers/bootcamps");

router.route('/').get(getBootcamps).post(createBootcamps);
router.route('/:id').get(getBootcamp).put(updateBootcamps).delete(deleteBootcamps);

// router.get('/', (req, res) => {
//     res.status(200).json({ sucess: true, msg: "show all data" })
// });

// router.get('/:id', (req, res) => {
//     res.status(200).json({ sucess: true, msg: `Get data ${req.params.id}` })
// });

// router.post('/', (req, res) => {
//     res.status(200).json({ sucess: true, msg: "create new data" })
// });

// router.put('/:id', (req, res) => {
//     res.status(200).json({ sucess: true, msg: `update data ${req.params.id}` })
// });

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ sucess: true, msg: `update delete ${req.params.id}` })
// });

module.exports = router;
