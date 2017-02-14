
import React , 	{ 	Component 	} 	from 'react';
import 			{ 	Image 		} 	from 'react-native';
import images 						from '../../configuration/images';
import styles 						from '../../styles/images';

export default class Favourited extends Component {

	render () {

		const source = this.props.favourited ? images.favourited.on : images.favourited.off;

		return (
			<Image 
				accessibilityLabel 	= { this.props.label 	}
				style 				= { styles.favourited 	} 
				source 				= {{ uri : source 		}} 
			/>
		);
	}
};