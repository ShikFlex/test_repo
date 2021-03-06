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
    }).state('app.homecool', {
        views: {
            app: {
                controller: 'app_homecool',
                templateProvider: function (app) {
                    return app.templateProvider('app.homecool');
                }
            }
        }
    }).state('app.monitoring_page', {
        views: {
            app: {
                controller: 'app_monitoring_page',
                templateProvider: function (app) {
                    return app.templateProvider('app.monitoring_page');
                }
            }
        }
    });
});