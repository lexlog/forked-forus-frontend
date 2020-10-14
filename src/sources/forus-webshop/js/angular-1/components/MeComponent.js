let MeComponent = function(
    $state,
    $scope,
    $stateParams,
    ModalService
) {
    let $ctrl = this;

    $ctrl.showPopupOffices = () => ModalService.open('modalOffices', {});
    $scope.openAuthCodePopup = () => ModalService.open('modalAuthCode', {});
    $scope.openActivateCodePopup = () => $state.go('start');

    if ($stateParams.confirmed) {
        $state.go('start');
    }
};

module.exports = {
    bindings: {},
    scope: {
        text: '=',
        button: '=',
    },
    controller: [
        '$state',
        '$scope',
        '$stateParams',
        'ModalService',
        MeComponent
    ],
    templateUrl: 'assets/tpl/pages/me.html'
};