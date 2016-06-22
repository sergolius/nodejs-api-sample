var express = require('express')
  , router = express.Router();

var model = require('../models/farms.js');

router.get('/', function (req, res, next) {
  model.find(function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.post('/', function (req, res, next) {
  model.create(req.body, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.delete('/:farmId', function (req, res, next) {
  model.findByIdAndRemove(req.params.farmId, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.get('/:farmId', function (req, res, next) {
  model.findById(req.params.farmId, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

router.put('/:farmId', function (req, res, next) {
  model.findByIdAndUpdate(req.params.farmId, req.body, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

module.exports = router;
