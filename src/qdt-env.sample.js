let minify = true;
let sourcemap = false;
let baseImplementationKey = 'general';
let chatId = 'fe0cd97da81f49594cefdb4807b20d6df2793db9ae5f6e26eabe354a4527d365';
let chatIdSponsor = 'fe0cd97da81f49594cefdb4807b20d6df2793db9ae5f6e26eabe354a4527d365';
let supportId = '15870000001861118?orgId=20065804523';
let allowIndexing = false;
let sessions = true;
let activateFirstFund = false;
let google_maps_api_key = 'AIzaSyDY5FB1fHdhYsfc5VwtSku_hOqbzvOLKSc';

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
                id: "f4693c5c-a15d-4165-ae02-aab9ab090890",
                config: {
                    sessionSampleRate: 1,
                    guestRoleArn: "arn:aws:iam::942771420812:role/RUM-Monitor-eu-west-1-942771420812-8444649728361-Unauth", 
                    identityPoolId: "eu-west-1:d20ce893-c51a-4bcf-96e0-7ed2ae6bfcb9",
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
            support_id: '15870000002078017?orgId=20065804523',
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
                id: "f4693c5c-a15d-4165-ae02-aab9ab090890",
                config: {
                    sessionSampleRate: 1,
                    guestRoleArn: "arn:aws:iam::942771420812:role/RUM-Monitor-eu-west-1-942771420812-8444649728361-Unauth", 
                    identityPoolId: "eu-west-1:d20ce893-c51a-4bcf-96e0-7ed2ae6bfcb9",
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
                id: "f4693c5c-a15d-4165-ae02-aab9ab090890",
                config: {
                    sessionSampleRate: 1,
                    guestRoleArn: "arn:aws:iam::942771420812:role/RUM-Monitor-eu-west-1-942771420812-8444649728361-Unauth", 
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
            ios_link: 'https://itunes.apple.com/nl/app/me-forus/id1422610676',
            captcha_site_key: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
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
