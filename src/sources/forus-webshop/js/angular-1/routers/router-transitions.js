module.exports = ['$transitions', '$filter', '$rootScope', 'appConfigs', (
    $transitions, $filter, $rootScope, appConfigs
) => {
    $transitions.onSuccess({}, function(transition) {
        let $i18n = $filter('i18n');
        let $translate = $filter('translate');

        let pageTitleKey = 'page_state_titles.' + transition.to().name;
        let implementationName = $i18n('implementation_name.' + appConfigs.client_key);
        
        let pageTitleText = $i18n(pageTitleKey, {
            implementation: implementationName
        });

        if (pageTitleKey == pageTitleText) {
            pageTitleText = $translate('page_title');
        }

        $rootScope.pageTitle = pageTitleText;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
}];