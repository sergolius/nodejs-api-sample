var express = require('express')
  , router = express.Router();

var model = require('../models/animals');

router.get('/', function (req, res, next) {
  var criteria = {
    $and: [{farm: req.params.farmId}]
  };
  var t = {};

  var $and = Object.keys(req.query).map(function (key) {
    t['params.' + key] = req.query[key];
    return t;
  });

  Array.prototype.push.apply(criteria.$and, $and);

  model.find(criteria, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.post('/', function (req, res, next) {
  req.body.farm = req.params.farmId;

  model.create(req.body, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.delete('/:animalId', function (req, res, next) {
  model.findByIdAndRemove(req.params.animalId, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.get('/:animalId', function (req, res, next) {
  model.findOne({
    _id: req.params.animalId,
    farm: req.params.farmId
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
    farm: req.params.farmId
  }, req.body, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

module.exports = router;
