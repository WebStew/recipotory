
import constants 	from '../constants/boards';
import api 			from '../api/boards';

const error = function ( data ) {

		return {
			error 	: data ,
			type 	: constants.error
		};
	} ,

	receive = function ( data ) {

		return {
			data 	: data ,
			type 	: constants.receive
		};
	} ,

	request = function ( id ) {

		return {
			id 		: id ,
			type 	: constants.request
		};
	} ,
	
	update = function ( data ) {

		return {
			data 	: data ,
			type 	: constants.update
		}
	};


/**
 * Actions for the snAPI.
 * @type {Object}
 */
export default {

	get ( id ) {

		return function ( dispatch ) {

			dispatch ( request ( id ));

			return api.get ( id ).then ( function ( response ) {

				return response.json ();
			})
			.then 	( data 	=> dispatch ( receive 	( data 	)))
			.catch 	( data 	=> dispatch ( error 	( data 	)));
		}
	} ,

	update ( data ) {
		
		return function ( dispatch ) {

			
			// We're assuming update on client is always right and never rejected
			dispatch ( update ( data ));

			return api.update ( data ).then ( function ( response ) {

				return response.json ();
			})
			//.then 	( data => console.log ( 'BOARD UPDATED - DO SOMETHING HERE '))
			.catch 	( data => dispatch ( error ( data )));
		}
	}
};
