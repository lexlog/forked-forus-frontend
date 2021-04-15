let ImplementationCmsEditComponent = function (
    $rootScope,
    MediaService,
    FormBuilderService,
    ImplementationService,
    PushNotificationsService
) {
    let $ctrl = this;

    const bannerPatterns = [{
        value: 'color',
        label: 'Color',
    }, {
        value: 'lines',
        label: 'Lines',
    }, {
        value: 'points',
        label: 'Points',
    }, {
        value: 'dots',
        label: 'Dots',
    }, {
        value: 'circles',
        label: 'Circles',
    }];

    const headerTextColors = [{
        value: 'dark',
        label: 'Dark',
    }, {
        value: 'bright',
        label: 'Light',
    }];

    const bannerOpacityOptions = [1, 2, 3, 4, 5, 6, 7, 9, 10].map((option) => ({
        value: (option * 10).toString(),
        label: (option * 10) + '%',
    }));

    $ctrl.modelPlaceholder = '';
    $ctrl.bannerMedia;

    $ctrl.bannerMeta = {
        media: null,
        auto_text_color: true,
        patterns: bannerPatterns,
        opacityOptions: bannerOpacityOptions,
        headerTextColors: headerTextColors,
        overlay_enabled: false,
        overlay_type: bannerPatterns[0].value,
        overlay_opacity: bannerOpacityOptions[4].value,
        header_text_color: headerTextColors[0].value,
    };

    $ctrl.selectBanner = (mediaFile) => {
        MediaService.store('implementation_banner', mediaFile, ['medium']).then((res) => {
            $ctrl.bannerMedia = res.data.data;
            $ctrl.bannerMeta.media = $ctrl.bannerMedia;
            $ctrl.form.values.media_uid = $ctrl.bannerMedia.uid;
        }, (res) => {
            PushNotificationsService.danger('Error!', res.data.message);
        });
    };

    $ctrl.preparePages = (implementation) => {
        const { pages, page_types, page_types_internal } = implementation;

        return page_types.reduce((pagesValue, page_type) => {
            pagesValue[page_type] = pages[page_type] ? pages[page_type] : {
                external: false,
                external_url: '',
                content: '',
            }

            if (page_types_internal.includes(page_type)) {
                pagesValue[page_type].external = false;
            }

            return pagesValue;
        }, {});
    }

    $ctrl.$onInit = () => {
        const { informal_communication, page_types, page_types_internal } = $ctrl.implementation;

        $ctrl.page_types = page_types;
        $ctrl.page_types_internal = page_types_internal;
        $ctrl.implementation.informal_communication = informal_communication ? '1' : '0';

        $ctrl.bannerMedia = $ctrl.implementation.banner;
        $ctrl.bannerMeta.media = $ctrl.implementation.banner;
        $ctrl.bannerMeta.overlay_type = $ctrl.implementation.overlay_type;
        $ctrl.bannerMeta.overlay_enabled = $ctrl.implementation.overlay_enabled;
        $ctrl.bannerMeta.overlay_opacity = $ctrl.implementation.overlay_opacity.toString();

        if ($ctrl.implementation.header_text_color == 'auto') {
            $ctrl.bannerMeta.auto_text_color = true;
            $ctrl.bannerMeta.header_text_color = $ctrl.implementation.banner ?
                ($ctrl.implementation.banner.is_dark ? 'bright' : 'dark') : 'dark';
        } else {
            $ctrl.bannerMeta.auto_text_color = false;
            $ctrl.bannerMeta.header_text_color = $ctrl.implementation.header_text_color;
        }

        console.log($ctrl.bannerMeta.header_text_color);

        $ctrl.form = FormBuilderService.build({
            ...$ctrl.implementation,
            ...{ pages: $ctrl.preparePages($ctrl.implementation) },
        }, (form) => {
            const { overlay_enabled, overlay_type, overlay_opacity } = $ctrl.bannerMeta;
            const header_text_color = $ctrl.bannerMeta.auto_text_color ? 'auto' : $ctrl.bannerMeta.header_text_color;

            ImplementationService.updateCMS($rootScope.activeOrganization.id, $ctrl.implementation.id, {
                ...form.values,
                ...{ overlay_enabled, overlay_type, overlay_opacity, header_text_color }
            }).then(() => {
                delete $ctrl.form.values.media_uid;
                form.unlock();
                form.errors = [];
                PushNotificationsService.success('Opgeslagen!');
            }, (res) => {
                form.unlock();
                form.errors = res.data.errors;
            });
        }, true);
    };
};

module.exports = {
    bindings: {
        implementation: '<',
    },
    controller: [
        '$rootScope',
        'MediaService',
        'FormBuilderService',
        'ImplementationService',
        'PushNotificationsService',
        ImplementationCmsEditComponent
    ],
    templateUrl: 'assets/tpl/pages/implementation-cms-edit.html'
};