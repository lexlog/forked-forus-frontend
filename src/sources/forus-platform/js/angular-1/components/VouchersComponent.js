const VouchersComponent = function(
    $state,
    $stateParams,
    $timeout,
    DateService,
    ModalService,
    VoucherService,
    VoucherExportService
) {
    const $ctrl = this;

    $ctrl.states = [
        { value: null, name: 'Selecteer...' },
        { value: 1, name: 'Ja' },
        { value: 0, name: 'Nee' },
    ];

    $ctrl.sources = [
        { value: 'all', name: 'Alle' },
        { value: 'user', name: 'Gebruiker' },
        { value: 'employee', name: 'Medewerker' },
    ];

    $ctrl.in_use = [
        { value: null, name: 'Selecteer...' },
        { value: 1, name: 'Ja' },
        { value: 0, name: 'Nee' },
    ];

    $ctrl.voucher_states = VoucherService.getStates();

    $ctrl.filters = {
        show: false,
        defaultValues: {
            q: '',
            granted: null,
            amount_min: null,
            amount_max: null,
            from: null,
            to: null,
            state: null,
            in_use: null,
            count_per_identity_min: 0,
            count_per_identity_max: null,
            type: 'fund_voucher',
            source: 'all',
            sort_by: 'created_at',
            sort_order: 'desc',
        },
        values: {},
        reset: function() {
            this.values = { ...this.defaultValues };
        }
    };

    $ctrl.resetFilters = () => {
        $ctrl.filters.reset();
    };

    $ctrl.hideFilters = () => {
        $timeout(() => $ctrl.filters.show = false, 0);
    };

    $ctrl.showQrCode = ($event, voucher) => {
        $event.stopPropagation();
        $event.preventDefault();

        ModalService.open('voucherQrCode', {
            voucher: voucher,
            fund: $ctrl.fund,
            organization: $ctrl.organization,
            onSent: () => $ctrl.onPageChange($ctrl.filters.values),
            onAssigned: () => $ctrl.onPageChange($ctrl.filters.values),
        });
    };

    $ctrl.createVoucher = () => {
        ModalService.open('voucherCreate', {
            fund: $ctrl.fund,
            organization: $ctrl.organization,
            onCreated: () => $ctrl.onPageChange($ctrl.filters.values),
        }, { maxLoadTime: 1000 });
    }

    $ctrl.uploadVouchersCsv = () => {
        ModalService.open('vouchersUpload', {
            fund: $ctrl.fund,
            type: $ctrl.filters.values.type,
            organization: $ctrl.organization,
            organizationFunds: $ctrl.funds,
            done: () => $state.reload(),
        });
    };

    $ctrl.getQueryParams = (query = {}) => {
        const data = angular.copy(query);
        const from = data.from ? DateService._frontToBack(data.from) : null;
        const to = data.to ? DateService._frontToBack(data.to) : null;

        return { ...data, from, to, fund_id: $ctrl.fund.id };
    };

    $ctrl.exportVouchers = () => {
        $ctrl.filters.show = false;
        
        const type = 'budget';
        const filters = $ctrl.getQueryParams($ctrl.filters.values);

        VoucherExportService.exportVouchers($ctrl.organization.id, filters, type);
    };

    $ctrl.onPageChange = (query) => {
        VoucherService.index(
            $ctrl.organization.id,
            $ctrl.getQueryParams(query),
        ).then((res => $ctrl.vouchers = res.data));
    };

    $ctrl.showTooltip = (e, target) => {
        e.originalEvent.stopPropagation();
        $ctrl.vouchers.data.forEach(voucher => {
            voucher.showTooltip = false;
        });
        target.showTooltip = true;
    };

    $ctrl.hideTooltip = (e, target) => {
        e.stopPropagation();
        e.preventDefault();
        $timeout(() => target.showTooltip = false, 0);
    };

    $ctrl.init = () => {
        $ctrl.resetFilters();
        $ctrl.onPageChange($ctrl.filters.values);
        $ctrl.fundClosed = $ctrl.fund.state == 'closed';
    };

    $ctrl.onFundSelect = (fund) => {
        $ctrl.fund = fund;
        $ctrl.init();
    };

    $ctrl.$onInit = () => {
        $ctrl.emptyBlockLink = $state.href('funds-create', $stateParams);

        if (!$ctrl.fund) {
            if ($ctrl.funds.length == 1) {
                $state.go('vouchers', {
                    organization_id: $state.params.organization_id,
                    fund_id: $ctrl.funds[0].id,
                });
            } else if ($ctrl.funds.length == 0) {
                // alert('Sorry, but no funds were found to add vouchers.');
                // $state.go('funds');
            }
        } else {
            $ctrl.init();
        }
    };
};

module.exports = {
    bindings: {
        fund: '<',
        funds: '<',
        organization: '<',
    },
    controller: [
        '$state',
        '$stateParams',
        '$timeout',
        'DateService',
        'ModalService',
        'VoucherService',
        'VoucherExportService',
        VouchersComponent
    ],
    templateUrl: 'assets/tpl/pages/vouchers.html'
};
