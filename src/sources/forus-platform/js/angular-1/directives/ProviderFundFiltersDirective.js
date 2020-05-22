let ProviderFundFiltersDirective = function(
    $scope,
    $stateParams,
    $filter,
    ProviderFundService
) {
    let $translate = $filter('translate');
    $scope.allFunds = $scope.fundsAvailable;

    $scope.getFundFilters = () => {
        $scope.fundOrganizations = [];
        $scope.fundLabels = [];

        let processedOrganizations = [];
        let processedLabels = [];

        $scope.fundsAvailable.forEach(fund => {
            if (processedOrganizations.indexOf(fund.organization.id) == -1) {
                $scope.fundOrganizations.push({
                    id: fund.organization.id,
                    name: fund.organization.name
                });

                processedOrganizations.push(fund.organization.id);
            }

            fund.tags.forEach(tag => {
                if (processedLabels.indexOf(tag.id) == -1) {
                    $scope.fundLabels.push({
                        id: tag.id,
                        key: tag.key,
                        name: tag.name
                    });

                    processedLabels.push(tag.id);
                }
            });
        });

        $scope.fundOrganizations = $scope.fundOrganizations.map(fundOrganization => {
            fundOrganization.id_str = fundOrganization.id += '';
            return fundOrganization;
        });

        $scope.fundLabels.unshift({
            key: 'null',
            name: $translate('sign_up_provider.filters.options.all_labels')
        });

        $scope.fundOrganizations.unshift({
            id_str: 'null',
            name: $translate('sign_up_provider.filters.options.all_organizations')
        });

        $scope.fundLabel = $scope.fundLabel ? $scope.fundLabel : 'null';
        $scope.fundOrganization = $scope.fundOrganization ? $scope.fundOrganization : 'null';
    }

    $scope.filterFunds = (organization = $scope.organization) => {
        let organization_id = $scope.fundOrganization && $scope.fundOrganization != 'null' ?
            $scope.fundOrganization : ($scope.useStatParams ? $stateParams.organization_id : null);
        let label = $scope.fundLabel && $scope.fundLabel != 'null' ?
            $scope.fundLabel : ($scope.useStatParams ? $stateParams.tag : null);
        let fund_id = $stateParams.fund_id,
            search_params = {};

        if (organization_id) {
            search_params.organization_id = organization_id;
        }

        if (label) {
            search_params.tag = label;
        }

        if (fund_id) {
            search_params.fund_id = fund_id;
        }

        if (!Object.keys(search_params).length) {
            $scope.fundsAvailable = $scope.allFunds;
        }

        return ProviderFundService.listAvailableFunds(
            organization.id, search_params
        ).then(res => {
            $scope.fundsAvailable = res.data.data;
        });
    }

    this.$onInit = function() {
        $scope.$watch('fundsAvailable', function(value) {
            $scope.getFundFilters();
        });
    }
};

module.exports = () => {
    return {
        scope: {
            fundsAvailable: '=',
            organization: '=',
            useStatParams: '<'
        },
        restrict: "EA",
        replace: true,
        controller: [
            '$scope',
            '$stateParams',
            '$filter',
            'ProviderFundService',
            ProviderFundFiltersDirective
        ],
        templateUrl: 'assets/tpl/directives/provider-fund-filters.html' 
    };
};