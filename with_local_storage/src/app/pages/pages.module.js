// core
import angular from 'angular';

// local
import pagesRoute from './pages.route';

export const pagesModule = angular.module('pages', [

]).run(pagesRoute).name;
