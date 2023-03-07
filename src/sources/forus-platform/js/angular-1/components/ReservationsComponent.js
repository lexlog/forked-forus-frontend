const ReservationsComponent = function(
    $timeout,
    ModalService,
    OrganizationService,
    PushNotificationsService,
    ProductReservationService
) {
    const $ctrl = this;

    $ctrl.empty = null;
    $ctrl.acceptedByDefault = false;

    $ctrl.states = [{
        key: null,
        name: 'Alle'
    }, {
        key: 'pending',
        name: 'In afwachting', // Pending
    }, {
        key: 'accepted',
        name: 'Geaccepteerd' // Accepted
    }, {
        key: 'rejected',
        name: 'Geweigerd' // Rejected
    }, {
        key: 'canceled',
        name: 'Geannuleerd' // Canceled by provider
    }, {
        key: 'canceled_by_client',
        name: 'Geannuleerd door aanvrager' // Canceled by client
    }];

    $ctrl.filters = {
        show: false,
        values: {},
        reset: function() {
            this.values.q = '';
            this.values.state = $ctrl.states[0].key;
            this.values.from = null;
            this.values.to = null;
            this.values.fund_id = null;
            this.values.product_id = null;
        }
    };

    $ctrl.resetFilters = () => {
        $ctrl.filters.reset();
    };

    $ctrl.hideFilters = () => {
        $timeout(() => $ctrl.filters.show = false, 0);
    };

    $ctrl.onPageChange = (query = {}) => {
        ProductReservationService.list($ctrl.organization.id, { ...$ctrl.filters.values, ...query }).then((res) => {
            $ctrl.reservations = res.data;
        });
    };

    $ctrl.acceptReservation = (reservation) => {
        ProductReservationService.confirmApproval(reservation, () => {
            ProductReservationService.accept($ctrl.organization.id, reservation.id).then((res) => {
                PushNotificationsService.success('Opgeslagen!');
                $ctrl.onPageChange();
            }, (res) => PushNotificationsService.danger(res.data.message));
        });
    }

    $ctrl.rejectReservation = (reservation) => {
        ProductReservationService.confirmRejection(() => {
            ProductReservationService.reject($ctrl.organization.id, reservation.id).then((res) => {
                PushNotificationsService.success('Opgeslagen!');
                $ctrl.onPageChange();
            }, (res) => PushNotificationsService.danger(res.data.message));
        });
    }

    $ctrl.setOrganization = (organization) => {
        $ctrl.organization = organization;
        $ctrl.acceptedByDefault = $ctrl.organization.reservations_auto_accept;
    }

    $ctrl.toggleAcceptByDefault = (value) => {
        const onEnable = () => {
            OrganizationService.updateAcceptReservations($ctrl.organization.id, value).then((res) => {
                $ctrl.setOrganization(res.data.data);
                PushNotificationsService.success('Opgeslagen!');
            });
        };

        const onDisable = () => {
            OrganizationService.updateAcceptReservations($ctrl.organization.id, value).then((res) => {
                $ctrl.setOrganization(res.data.data);
                PushNotificationsService.success('Opgeslagen!');
            });
        };

        const onCancel = () => {
            OrganizationService.read($ctrl.organization.id, value).then((res) => {
                $ctrl.setOrganization(res.data.data);
            });
        };

        if (value) {
            ModalService.open("dangerZone", {
                title: "Let op! Met deze instelling worden alle reserveringen direct geaccepteerd.",
                description_text: [
                    "Wilt u reserveringen automatisch accepteren? Ga dan akkoord met onderstaande voorwaarden:\n",
                    "- Het product of de dienst kan worden geleverd.",
                    "- De transactie wordt na veertien dagen verwerkt.",
                    "- De transactie kan op verzoek van de klant binnen veertien dagen worden geannuleerd."
                ].join("\n"),
                confirmation: "Ik ga akkoord met de voorwaarden.",
                cancelButton: "Annuleren",
                confirmButton: "Bevestigen",
                onConfirm: onEnable,
                onCancel: onCancel,
            });
        } else {
            onDisable();
        }
    };

    $ctrl.makeReservation = () => {
        ModalService.open('reservationCreate', {
            organization: $ctrl.organization,
            onCreated: () => $ctrl.onPageChange(),
        });
    };

    $ctrl.uploadReservations = () => {
        ModalService.open('reservationUpload', {
            organization: $ctrl.organization,
            onCreated: () => $ctrl.onPageChange(),
        });
    };

    $ctrl.$onInit = () => {
        const { reservations_budget_enabled, reservations_subsidy_enabled } = $ctrl.organization;

        $ctrl.filters.reset();
        $ctrl.onPageChange($ctrl.filters.values);

        $ctrl.acceptedByDefault = $ctrl.organization.reservations_auto_accept;
        $ctrl.reservationEnabled = reservations_budget_enabled || reservations_subsidy_enabled;

        $ctrl.funds.unshift({
            fund: {
                id: null,
                name: 'Alle tegoeden',
            }
        });

        $ctrl.products.unshift({
            id: null,
            name: 'Alle aanbod',
        });
    };
};

module.exports = {
    bindings: {
        funds: '<',
        products: '<',
        organization: '<',
    },
    controller: [
        '$timeout',
        'ModalService',
        'OrganizationService',
        'PushNotificationsService',
        'ProductReservationService',
        ReservationsComponent
    ],
    templateUrl: 'assets/tpl/pages/reservations.html'
};