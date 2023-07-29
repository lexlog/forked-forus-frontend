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

const me_app_link = 'https://forus.io/DL';
const ios_ipad_link = 'https://apps.apple.com/nl/app/me-forus/123';
const ios_iphone_link = 'https://apps.apple.com/nl/app/me-forus/123';
const android_link = 'https://play.google.com/store/apps/details?id=io.forus.me';

const outputRoot = "../dist";

module.exports = (core) => {

    core.editPlatform('webshop_potjeswijzer', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'westerkwartier',
            client_type: 'webshop',
            allow_indexing: allowIndexing,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,  
            default_title: 'Potjeswijzer',
            flags: {
                showAccountSidebar: false,
                showStartButton: true,
                showStartButtonText: 'Start aanvraag',
                startPage: {
                    combineColumns: true
                },

                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
                fundsMenu: true,
                accessibilityPage: false,
                activateFirstFund: true,
                fundsMenuIfLoggedOut: true,
                genericSearch: true,

                // home
                providersMenu: true,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });
        platform.setDestRootPath(outputRoot + '/westerkwartier');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_geertruidenberg', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'geertruidenberg',
            client_type: 'webshop',
            allow_indexing: allowIndexing,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,   
            default_title: 'Kindregelingen - gemeente Geertruidenberg',
            flags: {
               showAccountSidebar: false,
               showStartButton: true,
               showStartButtonText: 'Start aanvraag',
                startPage: {
                    combineColumns: true
                },

                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
                fundsMenu: true,
                fundsMenuIfLoggedOut: true,
                accessibilityPage: false,
                activateFirstFund: true,
                genericSearch: true,
                
                // home
                providersMenu: true,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });
        
        platform.setDestRootPath(outputRoot + '/geertruidenberg');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
  
    core.editPlatform('webshop_kerstpakket', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'kerstpakket',
            client_type: 'webshop',
            allow_indexing: allowIndexing,
            matomo_site_id: 'kerstpakket.forus.io',
            html5ModeEnabled: true,
            activateFirstFund: false,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,
            default_title: 'Kerstpakket',
            flags: {
                // menu settings
                fundsMenu: true,
                genericSearch: true,
                
                // home
                providersMenu: true,
            },
            html5Mode: {
                basePath: '/'
            }
        });
        
       platform.setDestRootPath(outputRoot + '/kerstpakket');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });

    core.editPlatform('webshop_berkelland', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'berkelland',
            client_type: 'webshop',
            allow_indexing: allowIndexing,
            //matomo_site_id: 'berkelland.forus.io',
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,    
            default_title: 'Kindregelingen - gemeente Berkelland',
            provider_sign_up_filters: {
                tag: 'sdoa'
            },

            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },

                secondLogo: 'sdoa-logo.svg',
                showAccountSidebar: false,

                accessibilityPage: true,
                activateFirstFund: true,

                
                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });
        
        platform.setDestRootPath(outputRoot + '/berkelland');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });

    core.editPlatform('webshop_oostgelre', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'oostgelre',
            client_type: 'webshop',
            //matomo_site_id: 'oostgelre.forus.io',
            html5ModeEnabled: true,
            allow_indexing: allowIndexing,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,    
            default_title: 'Kindregelingen - gemeente Oost Gelre',
            provider_sign_up_filters: {
                tag: 'sdoa'
            },

            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },

                secondLogo: 'sdoa-logo.svg',
                showAccountSidebar: false,

                accessibilityPage: true,
                activateFirstFund: true,
                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/oostgelre');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });

    core.editPlatform('webshop_winterswijk', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'winterswijk',
            client_type: 'webshop',
            //matomo_site_id: 'winterswijk.forus.io',
            allow_indexing: allowIndexing,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,     
            default_title: 'Kindregelingen - gemeente Winterswijk',
            provider_sign_up_filters: {
                tag: 'sdoa'
            },

            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },

                secondLogo: 'sdoa-logo.svg',
                showAccountSidebar: false,

                accessibilityPage: true,
                activateFirstFund: true,
                
                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/winterswijk');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });    
    
    core.editPlatform('webshop_noordoostpolder', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'noordoostpolder',
            client_type: 'webshop',
            matomo_site_id: 'noordoostpolder.forus.io',
            allow_indexing: allowIndexing,
            html5ModeEnabled: true,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,  
            default_title: 'Meedoenregeling - gemeente Noordoostpolder',
            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },

                accessibilityPage: true,
                activateFirstFund: true,
                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
            },
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/noordoostpolder');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_groningen', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'groningen',
            client_type: 'webshop',
            allow_indexing: allowIndexing,
            sessions: false,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,     
            default_title: 'Stadjerspas - gemeente Groningen',
            provider_sign_up_filters: {
                organization_id: 578
            },
            flags: {
                showStartButton: true,
                showStartButtonText: 'Start aanvraag',
                showAccountSidebar: false,
                disableDigidRestoreOption: true,
                startPage: {
                    combineColumns: true
                },
                
                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
                fundsMenu: true,
                
                noPrintOption: true,
                activateFirstFund: true,
                accessibilityPage: false,
                privacyPage: true,
                
                // home
                providersMenu: true,
                
                showFooterSponsorLogo: true,
                singleRecordValidation: true,
                useLightAppIcons: true,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/groningen');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    //Waalwijk
    core.editPlatform('webshop_waalwijk', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'waalwijk',
            client_type: 'webshop',
            allow_indexing: allowIndexing,
            sessions: false,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,     
            default_title: 'PasWijzer - gemeente Waalwijk',
            provider_sign_up_filters: {
                organization_id: 650
            },
            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                startPage: {
                    combineColumns: true
                },
                showAccountSidebar: false,
                disableDigidRestoreOption: false,
                logoExtension: '.png',
                
                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
                fundsMenu: true,
                fundsMenuIfLoggedOut: true,
                
                //noPrintOption: true,
                activateFirstFund: false,
                //accessibilityPage: false,
                //privacyPage: true,
                genericSearch: true,

                show2FAMenu: true,
                
                // home
                //providersMenu: true,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/waalwijk');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    //Heumen
    core.editPlatform('webshop_heumen', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'heumen',
            client_type: 'webshop',
            allow_indexing: allowIndexing,
            sessions: false,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,     
            default_title: 'Heumenkaart - gemeente Heumen',
            provider_sign_up_filters: {
                organization_id: 651
            },
            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                showAccountSidebar: false,
                logoExtension: '.png',
                disableDigidRestoreOption: false,
                startPage: {
                    combineColumns: true
                },
                
                // menu settings
                meAppMenu: false,
                forusPlatformMenu: false,
                portfolioMenu: false,
                aboutSiteMenu: false,
                fundsMenu: true,
                
                //noPrintOption: true,
                activateFirstFund: true,
                //accessibilityPage: false,
                //privacyPage: true,
                genericSearch: true,
                useLightAppIcons: true,

                // home
                //providersMenu: true,
            },
            html5ModeEnabled: true,
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/heumen');
        
        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_vergoedingen', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'vergoedingen',
            client_type: 'webshop',
            chat_id: false,
            matomo_site_id: false,
            allow_indexing: allowIndexing,
            html5ModeEnabled: true,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,            
            default_title: 'Inkomensondersteuning - gemeente Nijmegen',
            
            flags: {
                accessibilityPage: true,
                fundsMenu: true,
                activateFirstFund: false,
                genericSearch: true,
                
                fundsMenuIfLoggedOut: true,

                show2FAMenu: true,
                useLightAppIcons: true,
            },
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/vergoedingen');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_ede', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'ede',
            client_type: 'webshop',
            chat_id: false,
            matomo_site_id: false,
            allow_indexing: allowIndexing,
            html5ModeEnabled: true,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,            
            default_title: 'Meedoen - gemeente Ede',
            
            flags: {
                showStartButton: true,
                showStartButtonText: 'Start aanvraag',
                accessibilityPage: true,
                logoExtension: '.png',
                fundsMenu: true,
                activateFirstFund: false,
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },
                
                fundsMenuIfLoggedOut: true,
                useLightAppIcons: true,
            },
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/ede');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_schagen', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'schagen',
            client_type: 'webshop',
            chat_id: false,
            matomo_site_id: false,
            allow_indexing: allowIndexing,
            html5ModeEnabled: true,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,            
            default_title: 'Meedoen - gemeente Schagen',
            
            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                accessibilityPage: true,
                fundsMenu: true,
                activateFirstFund: true,
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },
                
                fundsMenuIfLoggedOut: true,
                useLightAppIcons: true,
            },
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/schagen');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_eemsdelta', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'eemsdelta',
            client_type: 'webshop',
            chat_id: false,
            matomo_site_id: false,
            allow_indexing: allowIndexing,
            html5ModeEnabled: true,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,            
            default_title: 'Meedoen - gemeente Eemsdelta',
            
            flags: {
                showStartButton: true,
                showStartButtonText: 'Start',
                logoExtension: '.png',
                accessibilityPage: true,
                fundsMenu: true,
                activateFirstFund: true,
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },
                
                fundsMenuIfLoggedOut: true,
                useLightAppIcons: true,
            },
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/eemsdelta');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });

    core.editPlatform('webshop_hartvanwestbrabant', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'hartvanwestbrabant',
            client_type: 'webshop',
            chat_id: false,
            matomo_site_id: false,
            allow_indexing: allowIndexing,
            html5ModeEnabled: true,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,            
            default_title: 'Hart van West Brabant',
            
            flags: {
                showStartButton: false,
                showStartButtonText: 'Start aanvraag',
                accessibilityPage: true,
                logoExtension: '.svg',
                fundsMenu: true,
                activateFirstFund: false,
                genericSearch: true,
                startPage: {
                    combineColumns: true
                },
        
                fundsMenuIfLoggedOut: true,
                productDetailsOnlyAvailableFunds: true,

                show2FAMenu: true,

            },
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/hartvanwestbrabant');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.editPlatform('webshop_doetegoed', (platform) => {
        platform.setEnvData({
            api_url: apiUrl,
            client_key: 'doetegoed',
            client_type: 'webshop',
            chat_id: false,
            matomo_site_id: false,
            allow_indexing: allowIndexing,
            html5ModeEnabled: true,
            sessions: sessions,
            google_maps_api_key: google_maps_api_key,
            me_app_link: me_app_link,
            android_link: android_link,
            ios_ipad_link: ios_ipad_link,
            ios_iphone_link: ios_iphone_link,            
            default_title: 'Doetegoed',
            provider_sign_up_filters: {
                tag: 'ppm'
            },
            
            flags: {
                logoExtension: '.svg',
                accessibilityPage: true,
                fundsMenu: false,
                activateFirstFund: false,
                genericSearch: false,
                fundsMenuIfLoggedOut: false,
                useLightAppIcons: true,
            },
            html5Mode: {
                basePath: '/'
            }
        });

        platform.setDestRootPath(outputRoot + '/doetegoed');

        platform.editTask('js', (task) => {
            task.minify = minify;
            task.sourcemap = sourcemap;
            return task;
        });

        return platform;
    });
    
    core.enableOnly([
        'webshop_westerkwartier',
        'webshop_kerstpakket', 
        'webshop_berkelland',
        'webshop_oostgelre',
        'webshop_winterswijk',
        'webshop_noordoostpolder',
        'webshop_geertruidenberg',
        'webshop_groningen',
        'webshop_waalwijk',
        'webshop_heumen',
        'webshop_potjeswijzer',
        'webshop_vergoedingen',
        'webshop_ede',
        'webshop_schagen',
        'webshop_eemsdelta',
        'webshop_hartvanwestbrabant',
        'webshop_doetegoed',
    ]);

    return core;
};