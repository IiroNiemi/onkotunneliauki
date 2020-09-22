import * as React from 'react';
import { Text, ActivityIndicator, StyleSheet, Image, View  } from 'react-native';


class TunnelPoll extends React.Component {
	constructor(props){
		super(props);
		this.state = {statusValueEast: "99", statusValueWest: "1" }
	}
	

	componentDidMount = () => {
		fetch('https://it101.infotripla.fi/city_app_traffic_data_rest_api/city_specific/tampere/tunneli/tunneli_status_and_area_notifications.php')
		.then((response) => {
			return response.json();
		}).then((data) => {

			console.log(data);
			this.setState({
								statusValueEast: data.tunneliStatus.statusValueEast, 
								statusValueWest: data.tunneliStatus.statusValueWest
							 });
		});
		// Tämä fetch palauttaa .php kuvan.
		// https://it101.infotripla.fi/traffic_camera/fetchPicture.php?if=1&cameraid=C04608&presetid=C0460800&preventCache=1589126551073

	
	};

	render(){

		return(
			
		// <Image source={require('../../assets/images/tunnel_open.png')} style={styles.welcomeImage} />
		// Pitäisikö tämä korvata komponentilla mille välitetään arvot 0 tai 1 ja palautettaisiin arvosta riippuen kuva-indikaattori?
		<View>
			{!this.state.statusValueEast ?  
				<Image source={require('../../assets/images/tunnel_open.png')} style={styles.welcomeImage} /> : 
				 <ActivityIndicator animating="true" size="large" color="#0000ff"/>}
		</View>
		);
	}
		
		
} 

export default TunnelPoll;

const styles = StyleSheet.create({
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
