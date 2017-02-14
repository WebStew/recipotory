
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View , 
					Text		} 	from 'react-native';
import 			{ 	Actions 	} 	from 'react-native-router-flux';

import Loader 						from '../components/utilities/loader';
import actions 						from '../actions/boards';

import style 						from '../styles/boards';


//import actions 						from '../actions/boards';
//import style 						from '../styles/boards';

export default connect (

	state => ({
		boards : state.boards
	})

) ( class Board extends Component {

	componentDidMount () {

		//  Actions.refresh ({
		// 	 title : this.props.boards.model [ this.props.id ].name
		//  });

		 //this.props.dispatch ( actions.get ( this.props.board.id ));
		 
		 //this.props.dispatch ( actions.get ({ id : this.props.board.id }));
	}
	
	render () {

		return (
			<View style = { style.list }>
				<Text style={{ backgroundColor: '#fff'}}>VOOM MATES</Text>
				<Loader
					loading = { this.props.boards.loading }
					size 	= 'large'
				/>
			</View>
		);
	}
});
