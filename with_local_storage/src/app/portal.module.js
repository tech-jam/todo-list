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

	// Routing
	.run(portalRoute)
	.name;
