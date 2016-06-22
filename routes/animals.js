var express = require('express')
  , router = express.Router();

var model = require('../models/animals');

router.get('/', function (req, res, next) {
  var criteria = {
    $and: [
      {farm: req.farmId},
      {params: req.query} // additional filter
    ]
  };

  model.find(criteria, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.post('/', function (req, res, next) {
  req.body.farm = req.farmId;

  model.create(req.body, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.delete('/:animalId', function (req, res, next) {
  model.remove({
    _id: req.params.animalId,
    farm: req.farmId
  }, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.get('/:animalId', function (req, res, next) {
  model.findOne({
    _id: req.params.animalId,
    farm: req.farmId
  }, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.put('/:animalId', function (req, res, next) {
  model.update({
    _id: req.params.animalId,
    farm: req.farmId
  }, req.body, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

module.exports = router;
