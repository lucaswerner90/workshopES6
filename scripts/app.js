import {HomeController} from './controllers/HomeController';
import {NameService} from './services/PersonService';


angular.module('myApp', [])
	.controller('HomeController', HomeController)
	.service('PersonService', NameService);
