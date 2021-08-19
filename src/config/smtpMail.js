const nodemailer = require('nodemailer');
const debug = require('debug')('bsf_api:debug:smtp-config');
const error = require('debug')('bsf_api:error:smtp-config');
const info = require('debug')('bsf_api:info:smtp-config');
const { smtpAccount } = require('./vars');

info.log = console.log.bind(console);

let transporter;

/**
 * Creates/overwrites the SMTP transporter.
 * @returns {void}
 */
const createTransporter = () => {
  // Creates an SMTP transport.
  transporter = nodemailer.createTransport(smtpAccount);
  // Verifies the instantiated SMTP transport.
  transporter.verify((err) => {
    if (err) {
      error('an error ocurred while verifying transporter: %o', err);
      debug(err);
    } else {
      info('transporter verified (Host: %s | User: %s)', smtpAccount.host, smtpAccount.auth.user);
      console.log("Server is ready to take our messages");
    }
  });
};

/**
 * Sends an email using the SMTP transporter.
 * @param {object} mailOptions Mail.Options
 * @returns {boolean}
 */
const sendMail = async (mailOptions) => {
  try {
    const response = await transporter.sendMail(mailOptions);
    debug('email sent successfully sent to recipient!: %o', response);
    return true;
  } catch (err) {
    error('an error ocurred while sending an email: %o', err);
    return false;
  }
};

module.exports = { sendMail, createTransporter };
