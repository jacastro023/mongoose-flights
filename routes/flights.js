const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/',flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);

router.get('/:id', flightsCtrl.show);

router.delete('/:id', flightsCtrl.delete)

// router.delete('/:id/destinations', flightsCtrl.deleteDestination)

router.post('/:id/destinations', flightsCtrl.addDestination)

router.delete('/:id/destinations/:dId', flightsCtrl.deleteDestination)


module.exports = router;
