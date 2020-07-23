// const agenda = require('../agenda');
'use strict';
module.exports = (agenda) => {
  agenda.define('first', (job, done) => {
    // console.log('job', job);
    console.log('Agenda first job ran');
    done();
  });

  agenda.on('ready', function() {
    agenda.now('first');
  });
  // agenda.now('first');
};
// (async function() { // IIFE to give access to async/await
//     // await agenda.start();
//     agenda.now('first');
//     // await agenda.every('1 minutes', 'first');
// })();
