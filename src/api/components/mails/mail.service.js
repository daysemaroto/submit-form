
const { sendMail } = require('../../../config/smtpMail');
// const { templateMessage } = require('./api/components/mails/view/templatehtml');
const { templateMessage } = require('./view/templatehtml');
// const { smtpAccount } = require('../src/config/vars');
const { smtpAccount } = require('../../../config/vars');


/**
 * Sends a information request notification from website
 * @param {object} param0
 */
const notifyNewMessage = async ({ data }) => (
    sendMail({
        from: `${data.email}`,
        to: smtpAccount.auth.user, // receiver email,
        subject: 'Solicitud de información',
        html: templateMessage({ data }),
    })
);

module.exports = {
    notifyNewMessage,
};
