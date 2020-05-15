// export default function(ngModule){
// 	// eslint-disable-next-line angular/module-getter
// 	ngModule.config(PortalConfig);
// }

// Inject
PortalConfig.$inject = [
	// '$analyticsProvider',
	'$httpProvider',
	'$qProvider',
	'$locationProvider',
	'cfpLoadingBarProvider'
];

// Class
export default function PortalConfig(
	// TODO: to enable it back
	// $analyticsProvider,
	$httpProvider,
	$qProvider,
	$locationProvider,
	cfpLoadingBarProvider
){
	/**
	 * Records pages that don't use $state or $route
	 */
	// $analyticsProvider.firstPageview(true);

	/**
	 * Records full path
	 */
	// $analyticsProvider.withAutoBase(true);

	/**
	 * Tracks exceptions in google.
	 */
	// $analyticsProvider.trackExceptions(true);

	/**
	 * In parallel
	 */
	$httpProvider.useApplyAsync(true);

	/**
	 * Serializer
	 */
	$httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';

	/**
	 * qProvider
	 */
	$qProvider.errorOnUnhandledRejections(false);

	/**
	 * Loading Bar
	 */
	cfpLoadingBarProvider.includeSpinner = false;

	/**
	 * To be able to easy use search parameters
	 */
	$locationProvider.html5Mode(true);
}
