'use strict';
const Agenda = require('agenda');
const ds = require('../datasources.json');

const connectionString = ds.mongo.url;

module.exports = function(server) {
  const agenda = new Agenda({
    db: {address: connectionString, collection: 'agendaJobs'},
    // processEvery: '30 seconds'
  });

  let jobTypes = ['first'];

  // loop through the job_list folder and pass in the agenda instance
  jobTypes.forEach(type => {
    // the type name should match the file name in the jobs_list folder
    console.log('foreach');
    require('../jobs/' + type)(agenda, server);
  });

  if (jobTypes.length) {
    // if there are jobs in the jobsTypes array set up
    console.log('length');
    agenda.on('ready',  () => {
      console.log('ready');
      agenda.start();
    });
  }

  agenda.on('fail', function(err, job) {
    return console.log('Job failed with error: ' + err.message);
  });

  let graceful = () => {
    console.log('graceful');
    agenda.stop(() => process.exit(0));
  };

  // process.on("SIGTERM", graceful);
  // process.on("SIGINT", graceful);

  module.exports = agenda;
};
