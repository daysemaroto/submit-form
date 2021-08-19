const express = require('express');
const verbose = require('debug')('bsf_api:verbose:routes');
const debug = require('debug')('bsf_api:debug:routes');
const MailService = require('../../components/mails/mail.service');
const multiparty = require("multiparty");

const router = express.Router();

/**
 * Log all requests
 */
router.all('*', (req, res, next) => {
    debug('req Auth: %o', req.get('Authorization'));
    verbose('req body: %o', req.body);
    verbose('req query: %o req.params: %o', req.query, req.params);
    next();
});

//Index page (static HTML)
router.get("/").get((req, res) => {
    res.sendFile(process.cwd() + "/public/index.html");
});

router.get('/status', (req, res) => res.send('OK'));



router.post('/send', (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, async (err, fields) => {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
        });
        await MailService.notifyNewMessage({ data });
    });

});

module.exports = router;
