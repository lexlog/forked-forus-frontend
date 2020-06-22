const environment = require("./protractor-env.js");
const MailListener = require("./util/mailListener")

exports.config = {
    capabilities: {
        'browserName': environment.browser.name,
        'name': 'Bstack-[Protractor] Local Test',
    },

    suites: {
        requester: ['testcases/requester/*-spec.js'],
        sponsor: ['testcases/sponsor/*-spec.js'],
        provider: ['testcases/provider/*-spec.js'],
        validator: ['testcases/validator/*-spec.js']
    },

    beforeLaunch: function() {
        global.environment = environment;
        global.mailListener = MailListener();
    },
};