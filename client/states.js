angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.loginclassic', {
        views: {
            app: {
                controller: 'app_loginclassic',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginclassic');
                }
            }
        }
    }).state('app.monitoring_layer', {
        views: {
            app: {
                controller: 'app_monitoring_layer',
                templateProvider: function (app) {
                    return app.templateProvider('app.monitoring_layer');
                }
            }
        }
    });
});