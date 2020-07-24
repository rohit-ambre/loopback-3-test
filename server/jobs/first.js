// const agenda = require('../agenda');
'use strict';
module.exports = (agenda, server) => {
  const app = server;
  agenda.define('first', (job, done) => {
    // console.log('job', job);
    app.models.Brand.findOne({
      where: {
        id: 1,
      },
    }).then(function(LG) {
      console.log(LG);
    }).catch(e => console.log(e));

    console.log('Agenda first job ran');
    done();
  });

  // agenda.on('ready', function() {
  //   agenda.every('1 minute', 'first');
  // });
};
// (async function() { // IIFE to give access to async/await
//     // await agenda.start();
//     agenda.now('first');
//     // await agenda.every('1 minutes', 'first');
// })();
