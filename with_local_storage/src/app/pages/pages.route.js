// Inject
MainRoute.$inject = ['PortalRouteProvider'];

export default function MainRoute(PortalRouteProvider){
	/**
	 * States configuration for routes
	 *
	 * @memberof AdminCustomerRoute
	 */
	const states = [
		// Root
		{
			name: 'app.pages',
			component: 'pages'
		},
		{
			name: 'app.pages.home.**',
			url: '/home',
			lazyLoad: ($transition$) => {
				const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

				return import('./home/home.module')
					.then(mod => $ocLazyLoad.inject(mod.homeModule))
					.catch(err => {
						throw new Error('Ooops, something went wrong, ' + err);
					});
			}
		}
	];

	/**
	 * States configuration for routes
	 *
	 * @memberof AdminCustomerRoute
	 */
	PortalRouteProvider.configureStates(states, '/home');
}
