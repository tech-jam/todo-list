// core
import angular from 'angular';
// import 'angular-ui-router';
import 'angular-cookies';
import 'ngstorage';

// 3rd-party
import 'angular-ui-bootstrap';
import 'angular-loading-bar';

// local
import portalConfig from './portal.config';
import routeProvider from './services/portal-route-provider.service';

export const coreModule = angular
	.module('core', [])

	// Providers
	.provider('PortalRouteProvider', routeProvider)

	// Config
	.config(portalConfig)
	.name;
