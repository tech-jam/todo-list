appRun.$inject = ['PortalRouteProvider'];

export default function appRun(PortalRouteProvider){
	PortalRouteProvider.configureStates(getStates());
}

function getStates(){
	return [
		{
			name: 'app.home',
			url: '/home',
			component: 'home',
			data: {
				title: 'Home'
			}
		}
	];
}
