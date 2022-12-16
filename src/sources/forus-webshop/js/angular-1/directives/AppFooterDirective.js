let AppFooterDirective = function(
    $sce,
    $scope,
    $rootScope
) {
    const $dir = $scope.$dir = {};
    const footerPageKeys = [
        'privacy', 'accessibility', 'terms_and_conditions',
    ];

    $rootScope.$watch('appConfigs', (configs) => {
        if (!configs || !configs.features || (typeof configs.features.pages !== 'object')) {
            return;
        }

        $scope.appConfigs = configs;

        const { pages } = configs.features;
        const { footer_opening_times, footer_contact_details } = pages;

        if (footer_opening_times && footer_opening_times.description_html) {
            $scope.description_opening_times_html = $sce.trustAsHtml(footer_opening_times.description_html);
        }

        if (footer_contact_details && footer_contact_details.description_html) {
            $scope.description_contact_details_html = $sce.trustAsHtml(footer_contact_details.description_html);
        }

        $dir.pageLinks = Object.values(pages).filter((page) => {
            return footerPageKeys.includes(page.page_type);
        });

        $dir.showCMSSignupPage = Object.values(pages).filter(page => page.page_type == 'provider').length;
    }, true);
};


// privacy accessibility, terms_and_conditions

module.exports = () => {
    return {
        scope: {
            settings: '=?'
        },
        restrict: "EA",
        replace: true,
        controller: [
            '$sce',
            '$scope',
            '$rootScope',
            AppFooterDirective
        ],
        templateUrl: 'assets/tpl/directives/app-footer.html'
    };
};