let minify = true;
let sourcemap = false;
let baseImplementationKey = 'general';
let chatId = '123';
let chatIdSponsor = '123';
let supportId = '123';
let allowIndexing = false;
let sessions = true;
let activateFirstFund = false;
let google_maps_api_key = '123';
let apiUrl = "https://staging.api.forus.io/api/v1"

const me_app_link = 'https://forus.io/DL';
const ios_ipad_link = 'https://apps.apple.com/nl/app/me-forus/id1422610676';
const ios_iphone_link = 'https://apps.apple.com/nl/app/me-forus/id1422610676';
const android_link = 'https://play.google.com/store/apps/details?id=io.forus.me';
const help_link = 'https://helpcentrum.forus.io';

const supported_devices_link = "https://support.forus.io/portal/nl/kb/articles/me-app-14-5-2020";

const outputRoot = "../dist";
const outputRootBackendPublic = outputRoot + '/backend';

module.exports = (core) => {
    core.editPlatform('dashboard_general_sponsor', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: baseImplementationKey,
            panel_type: 'sponsor',
            chat_id: chatId,
            html5ModeEnabled: true,
            hide_voucher_generators: false,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,
            help_link: help_link,
            aws_rum: {
                id: "123",
                config: {
                    sessionSampleRate: 1,
                    guestRoleArn: "123", 
                    identityPoolId: "123",
                    endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
                    telemetries: ["performance", "errors", "http"],
                    allowCookies: true, 
                    enableXRay: false
                },
            },
            html5Mode: {
                basePath: '/sponsor/'
            }
        });

        platform.setDestRootPath(outputRoot + '/website/sponsor');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });

    core.editPlatform('dashboard_general_provider', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: baseImplementationKey,
            panel_type: 'provider',
            chat_id: false,
            support_id: '123',
            html5ModeEnabled: true,
            hide_voucher_generators: false,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,      
            supported_devices_link: supported_devices_link,
            help_link: help_link,
            aws_rum: {
                id: "123",
                config: {
                    sessionSampleRate: 1,
                    guestRoleArn: "123", 
                    identityPoolId: "123",
                    endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
                    telemetries: ["performance", "errors", "http"],
                    allowCookies: true, 
                    enableXRay: false
                },
            },       
            flags: {
                maxProductCount: 20,
            },
            html5Mode: {
                basePath: '/provider/'
            }
        });

        platform.setDestRootPath(outputRoot + '/website/provider');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });

    core.editPlatform('dashboard_general_validator', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
           client_key: baseImplementationKey,
            panel_type: 'validator',
            hide_voucher_generators: false,
            chat_id: chatId,
            support_id: false,
            flags: {
                singleRecordValidation: true
            },
            sessions: sessions,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,
            help_link: help_link,
            aws_rum: {
                id: "123",
                config: {
                    sessionSampleRate: 1,
                    guestRoleArn: "123", 
                    identityPoolId: "eu-west-1:d20ce893-c51a-4bcf-96e0-7ed2ae6bfcb9",
                    endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
                    telemetries: ["performance", "errors", "http"],
                    allowCookies: true, 
                    enableXRay: false
                },
            },
        });

        platform.setDestRootPath(outputRoot + '/website/validator');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_general', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: baseImplementationKey,
            client_type: 'webshop',
            matomo_site_id: false,
            support_id: supportId,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,
            flags: {},
        });

        platform.setDestRootPath(outputRoot + '/general');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    // Config meapp landings
    core.editPlatform('website', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: baseImplementationKey,
            panel_type: 'website',
            matomo_site_id: 'forus.io',
            html5ModeEnabled: true,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,
            ios_link: '123',
            captcha_site_key: '123',
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/website');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    // Config backend platform
    core.editPlatform('backend_general', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'general',
            client_type: 'pin_code-auth',
            disable_timestamps: true,
        });

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });
        
        // Change building path
        platform.setDestRootPath(outputRootBackendPublic);

        return platform;
    });
    
    core.enableOnly([
        'dashboard_general_sponsor',
        'dashboard_general_provider',
        'dashboard_general_validator',
        'webshop_general',
        'website',
        'backend_general',

    ]);

    return core;
};
