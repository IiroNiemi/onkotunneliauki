import * as React from 'react';
import ResolveTunnelStatus from './ResolveTunnelStatus';
import { Text, ActivityIndicator, StyleSheet, Image, View  } from 'react-native';


class TunnelPoll extends React.Component {
	constructor(props){
		super(props);
		this.state = {tunnelStatus: ""}
	}
	componentDidMount = () => {
		fetch('https://it101.infotripla.fi/city_app_traffic_data_rest_api/city_specific/tampere/tunneli/tunneli_status_and_area_notifications.php')
		.then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({ tunnelStatus: data });
		});

		// Tämä fetch palauttaa .php kuvan.
		// https://it101.infotripla.fi/traffic_camera/fetchPicture.php?if=1&cameraid=C04608&presetid=C0460800&preventCache=1589126551073
	};

	render(){
		return(
			<ResolveTunnelStatus tunnelState={this.state.tunnelStatus}/>
		);
	}
		
		
} 

export default TunnelPoll;
