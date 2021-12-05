const snakeCase = require('lodash/snakeCase');

function ErrorComponent($state, $stateParams) {
    const $ctrl = this;

    $ctrl.$onInit = () => {
        $ctrl.errorCode = snakeCase($stateParams.errorCode);
        $ctrl.hideHomeLinkButton = $stateParams.hideHomeLinkButton;
        
        $ctrl.WebshopStartLogout = (logout_state) => {
            $state.go('start', { logout: logout_state }, { absolute: true });
        };

        $ctrl.transParams = {
            url_webshop_home: $state.href('home', {}, { absolute: true }),
            url_webshop_start: $state.href('start', {}, { absolute: true }),
            url_webshop_start_logout: $state.href('start', { logout: 1 }, { absolute: true }),
        };
    };
}

module.exports = {
    bindings: {
        errorCode: '=',
        hideHomeLinkButton: '=',
    },
    controller: [
        '$state',
        '$stateParams',
        ErrorComponent,
    ],
    templateUrl: 'assets/tpl/pages/error.html',
};
