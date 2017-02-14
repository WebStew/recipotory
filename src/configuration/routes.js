
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Actions , 
					Router 	, 
					Reducer ,
					Scene		} 	from 'react-native-router-flux';
import 			{ 	connect 	} 	from 'react-redux';
import Boards 						from '../screens/boards';
import Board 						from '../screens/board';
import style 						from '../styles/navigation';

const scenes = Actions.create (
		<Scene 
			key = 'Root'
		>
			<Scene 
				key 		= 'boards' 
				component 	= { Boards } 
				title 		= 'Boards' 
			/>
			<Scene 
				key 		= 'board' 
				component 	= { Board } 
				title 		= 'Board' 
			/>
		</Scene>
	);

export default connect () ( class Routes extends Component {

	reducer ( parameters ) {

		const original = Reducer ( parameters );
		
		return ( state , action ) => {

			this.props.dispatch ( action 			);
			return original 	( state , action 	);
		};
	}

	render () {

		return (
			<Router
				getSceneStyle 		= { function () {
					return {
						backgroundColor :'#212121'
					};
				}}
				createReducer 		= { this.reducer.bind ( this )}
				navigationBarStyle 	= { style.bar 	}
				scenes 				= { scenes 		} 
				titleStyle 			= { style.title }
			/>
		);
	}
});