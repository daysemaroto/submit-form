// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const infoLog = require('debug')('bsf_api:info:index');
const {
  port,
  env,
  smtpAccount,
} = require('./config/vars');
const logger = require('./config/logger');
const app = require('./config/express');
const smtpMail = require('./config/smtpMail');

infoLog.log = console.log.bind(console);
infoLog('  Init API server...');

infoLog('user smtp:', port, env, smtpAccount.auth.user);

smtpMail.createTransporter();

/** ********************************************** */
// Express server listening...
// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;
