
import environment 	from '../configuration/environment';

const api 	= {
		domain 		: environment.API ,
		endpoint 	: '/boards'
	} ,

	headers = {
		Accept 			: 'application/json' ,
		'Content-Type' 	: 'application/json'
	};

export default {
	
	get ( id ) {

		let url = api.domain + api.endpoint;

		url 	+= id ? '/' + id : '';

		return fetch ( url 	, {
			method 	: 'GET' ,
			headers : headers
		});
	} ,

	update ( data ) {
		
		let url = api.domain + api.endpoint + '/' + data.id;

		return fetch ( url	, {
			body 	: data.model 	,
			method 	: 'PUT' 		,
			headers : headers
		});
	}
};
