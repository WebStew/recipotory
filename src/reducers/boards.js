
import update 		from 'immutability-helper';
import constants 	from '../constants/boards';
import utilities 	from '../utilities/arrays.js';

let _models = [];

export default function (

	state 	= {
		error 	: null 	,
		loading : false ,
		models 	: []
	} , 

	action 	= {}

) {

	let change 	,
		index 	;

	switch ( action.type ) {

		case constants.error 	:

			change = Object.assign (
				{} 		,
				state 	,
				{
					error 	: action.error ,
					loading : false
				}
			);

		break;

		case constants.receive 	:

			// We've recieved an array of board models
			if ( Array.isArray ( action.data )) {

				_models = action.data;
				change 	= Object.assign (
					{} 		,
					state 	,
					{
						loading : false ,
						models 	: _models
					}
				);
			}

			// We're recieved a single board model
			else {

				// Find the item in our boards array
				action.data.loading = false;
				index 				= utilities.getIndexByProperty ( _models , 'id' , action.id );
				change 				= update ( state , { 
					models 	: {
						[ index ] : { $merge : action.data }
					}
				});

			}

		break;

		case constants.request 	:

			// We're requesting a single board model
			if ( action.id ) {

				index 	= utilities.getIndexByProperty ( _models , 'id' , action.id );
				change 	= update ( state , {
					models 	: {
						[ index ] 	: { 
							$merge 	: { 
								loading : true 
							}
						}
					}
				});
			}

			// We're requesting all the board models
			else {

				change = Object.assign (
					{} 		,
					state 	,
					{
						loading : true
					}
				);
			}

		break;

		case constants.update 	:

			// Find the item in our boards array
			index 	= utilities.getIndexByProperty ( _models , 'id' , action.data.id );
			change 	= update ( state , {
				models 	: {
					[ index ] : { $merge : action.data }
				}
			});

		break;

		default :
			change = state;
	}

	return change;
};
