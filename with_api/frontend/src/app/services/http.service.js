import _ from 'lodash';
import swal from 'sweetalert';

HttpService.$inject = ['$http', 'ENV'];

export default function HttpService($http, ENV){
	// init
	const self = this;

	self.API_URL = ENV.API_URL;

	self.get = function(endpoint){
		return $http.get(`${self.API_URL}/${endpoint}`).then((response) => {
			return _.get(response, 'data', null);
		}).catch((e) => {
			return swal({
				title: 'Internal Server Error',
				// eslint-disable-next-line angular/json-functions
				text: JSON.stringify(e),
				type: 'error',
				html: true,
				showConfirmButton: false
			});
		});
	};

	self.post = function(endpoint, data){
		return $http.post(`${self.API_URL}/${endpoint}`, data).then((response) => {
			return _.get(response, 'data', null);
		}).catch((e) => {
			return swal({
				title: 'Internal Server Error',
				// eslint-disable-next-line angular/json-functions
				text: JSON.stringify(e),
				type: 'error',
				html: true,
				showConfirmButton: false
			});
		});
	};

	self.put = function(endpoint, id, data){
		return $http.put(`${self.API_URL}/${endpoint}/${id}`, data)
			.then((response) => {
				return _.get(response, 'data', null);
			}).catch((e) => {
				return swal({
					title: 'Internal Server Error',
					// eslint-disable-next-line angular/json-functions
					text: JSON.stringify(e),
					type: 'error',
					html: true,
					showConfirmButton: false
				});
			});
	};

	self.delete = function(endpoint, id){
		return $http.delete(`${self.API_URL}/${endpoint}/${id}`).then((response) => {
			return response;
		}).catch((e) => {
			return swal({
				title: 'Internal Server Error',
				// eslint-disable-next-line angular/json-functions
				text: JSON.stringify(e),
				type: 'error',
				html: true,
				showConfirmButton: false
			});
		});
	};
}
