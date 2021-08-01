const dasherize = require("underscore.string/dasherize");

let ModalsRootDirective = function($scope, ModalService, ModalRoute) {
    const modals = ModalService.getModals();
    const routeModals = ModalRoute.modals();

    $scope.modals = modals;

    $scope.$watch('modals', (modals) => {
        update(modals.filter((modal => !modal.ready)));
    }, true);

    const update = (modals) => {
        modals.forEach(_modal => {
            const modal = _modal;

            modal.ready = true;
            modal.component = routeModals[modal.key].component;
            modal.componentType = dasherize(routeModals[modal.key].component);
            modal.close = function() {
                if (typeof modal.events.onClose === 'function') {
                    modal.events.onClose(modal);
                }

                ModalService.close(modal);
            };
        });
    };
};

module.exports = () => {
    return {
        restrict: "EA",
        controller: [
            '$scope',
            'ModalService',
            'ModalRoute',
            ModalsRootDirective
        ],
        templateUrl: 'assets/tpl/directives/modals-root.html'
    };
};
