'use strict';

module.exports = function(server) {
  var loopback = server.loopback;
  var router = loopback.Router();

  var Agenda = require('./agenda');
  var Agendash = require('agendash');

  router.use('/dash', Agendash(Agenda));

  server.use(router);
};
