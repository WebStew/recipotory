
import { combineReducers } 	from 'redux';
import boards 				from '../reducers/boards';
import routes 				from '../reducers/routes';

export default combineReducers ({
	boards 	,
	routes
});
