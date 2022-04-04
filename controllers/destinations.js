const Flight = require('../models/flight')

module.exports = {
	create,
  new: newDestination
}

function create(req, res) {
  Destination.create(req.body, function (err) {
      if (err) {
          res.redirect(`/destinations/new?error=true`)
      } else {
          res.redirect('/destinations/new')
      }
  })
}

function newDestination(req, res) {
  const error = Boolean(req.query.error);
  Destination.find({}, function (err, destinations) {
      res.render('destinations/new', {
          title: 'Add Destination',
          destinations: destinations,
          error: error,
      })
  })
}