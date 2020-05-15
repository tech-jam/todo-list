import _ from 'lodash';

PortalRouteProvider.$inject = [
	'$stateProvider',
	'$urlRouterProvider'
];

export default function PortalRouteProvider(
	$stateProvider,
	$urlRouterProvider
){
	this.$get = Router;

	/* @ngInject */
	Router.$inject = ['$state'];

	/**
	 * Make URLs great again.
	 *
	 * @memberof PortalRouteProvider
	 */
	function Router($state){
		// init
		var hasOtherwise = false;

		var service = {
			configureStates: configureStates,
			configureAliases: configureAliases,
			getStates: getStates
		};

		return service;

		/**
		 * Adds aliases to the router provider.
		 *
		 * @memberof PortalRouteProvider.Router
		 */
		function configureAliases(aliases){
			_.forEach(aliases, function(alias){
				$urlRouterProvider.when(alias[0], alias[1]);
			});
		}

		/**
		 * Adds states to the state provider.
		 *
		 * @memberof PortalRouteProvider.Router
		 * @param {Array} states - An array of state objects.
		 * @param {String} otherwise - A path to otherwise.
		 */
		function configureStates(states, otherwise){
			// assign states
			_.forEach(states, function(state){
				$stateProvider.state(state);
			});

			// otherwise
			if(otherwise && !hasOtherwise){
				hasOtherwise = true;
				$urlRouterProvider.otherwise(otherwise);
			}
		}

		/**
		 * Adds states to the state provider.
		 *
		 * @memberof PortalRouteProvider.Router
		 * @return {Array} - An array of states.
		 */
		function getStates(){
			return $state.get();
		}
	}
}

