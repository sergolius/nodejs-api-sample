var mongoose = require('mongoose');

module.exports = function (app) {
  var routesSite = require('./site');
  var routesFarms = require('./farms');
  var routesAnimals = require('./animals');

  app.use('/', routesSite);
  app.use('/farms', routesFarms);
  app.use('/farms/:farmId/animals', routesAnimals);
};
