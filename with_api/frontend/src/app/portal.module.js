// core
import angular from 'angular';
import 'angular-cookies';
import 'ngstorage';
import 'ng-idle';
import 'oclazyload';

// 3rd-party
import 'angular-ui-bootstrap';
import 'angular-loading-bar';
import 'angular-moment';
import 'angular-spinner';
import 'angular-sanitize';
import 'angular-input-modified';

// local
import portalConfig from './portal.config';
import portalRoute from './portal.route';
import SpinnerConfigProvider from './config/app-spinner.config';
import HttpService from './services/http.service';

// Modules
import {coreModule}from './core.module';

export const moduleName = angular
	.module('portal', [
		'ui.bootstrap',
		'ui.router',
		'angularSpinner',
		'angularMoment',
		'angular-loading-bar',
		'ngCookies',
		'ngStorage',
		'ngInputModified',
		'ngIdle',
		'ngSanitize',
		'oc.lazyLoad',
		coreModule
	])

	// Configs
	.config(portalConfig)
	.config(['usSpinnerConfigProvider', SpinnerConfigProvider])

	// Services
	.service('HttpService', HttpService)
	// Constants
	.constant('ENV', {
		API_URL: 'http://testng.hm/api'
	})
	// Routing
	.run(portalRoute)
	.name;
