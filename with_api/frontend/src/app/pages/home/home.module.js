// core
import angular from 'angular';

// local
import Route from './home.route';
import home from './home.component';
export const homeModule = angular
	.module('contact', [])

	// Routing
	.run(Route)

	// Components
	.component('home', home)
	.name;
