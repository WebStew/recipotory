
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	connect 	} 	from 'react-redux';
import 			{ 	View 		} 	from 'react-native';
import List 						from '../components/utilities/list-view';
import Loader 						from '../components/utilities/loader';
import Overview 					from '../components/boards/overview';
import actions 						from '../actions/boards';
import style 						from '../styles/boards';

export default connect (

	state => ({
		boards : state.boards
	})

) ( class Boards extends Component {

	constructor ( props ) {

		super ( props )
		this.setItem = this.setItem.bind ( this );
	}

	componentDidMount () {
		
		if ( ! this.props.boards.models.length ) {

			this.props.dispatch ( actions.get ());
		}
	}
	
	setItem ( data ) {

		return ( 
			<Overview 
				board 		= { data 				}
				dispatch 	= { this.props.dispatch }
			/>
		);
	}
	
	render () {

		return (
			<View style = { style.list }>
				<List 
					items 	= { this.props.boards.models 	}
					loading = { this.props.boards.loading 	}
					setItem = { this.setItem 				}
				/>
				<Loader
					loading = { this.props.boards.loading }
					size 	= 'large'
				/>
			</View>
		);
	}
});
