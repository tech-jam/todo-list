PortalRoute.$inject = ['PortalRouteProvider'];

/** @ngInject */
export default function PortalRoute(PortalRouteProvider){
	/**
	 * States configuration for routes
	 */
	const states = [
		// Root
		{
			name: 'app',
			abstract: true,
			template: '<div ui-view></div>'
		},
		{
			name: 'app.pages.**',
			url: '/',
			lazyLoad: ($transition$) => {
				const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

				return import(/* webpackChunkName: "layout" */ './pages/pages.module')
					.then(mod => $ocLazyLoad.inject(mod.pagesModule))
					.catch(err => {
						throw new Error('Ooops, something went wrong, ' + err);
					});
			}
		}
	];

	/**
	 * States configuration for routes
	 *
	 * @memberof PortalRoute
	 */
	PortalRouteProvider.configureStates(states, '/home');
	// PortalRouteProvider.configureAliases(aliases);
}
