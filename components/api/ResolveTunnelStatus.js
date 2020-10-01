import * as React from 'react';
import { Switch } from 'react-native';
import { Text, ActivityIndicator, StyleSheet, Image, View  } from 'react-native';
import SingleLaneInfo from './SingleLaneInfo';
	

const LANE_CLOSED = 2;
const LANE_OPEN = 0;
const UNKNOWN_TUNNEL_STATE  = 99

const ResolveTunnelStatus = (tunnelState) => {
	let tStatus = tunnelState;
	let EastStatus = tStatus.tunnelState.data.tunneliStatus.statusValueEast;
	let WestStatus = tStatus.tunnelState.data.tunneliStatus.statusValueWest;

	// Lataa tähän SingleLaneInfot
	let	EastResolved = null;
	let WestResolved = null

	// Tähän tarvitsee muodostaa kaksi switchiä missä käydään molemmat tunnelinpäät läpi ja palauttaa molemmista SingleLaneInfo komponentti.
	
	console.log(EastStatus);
	console.log(WestStatus);

	
	switch(EastStatus){
		case EastStatus = LANE_OPEN:
			EastResolved = <Image source={require('../../assets/images/tunnel_open.png')} style={styles.tunnelStyle} />
			break;

		case EastStatus = LANE_CLOSED:
			EastResolved = <Image source={require('../../assets/images/tunnel_lane_closed.png')} style={styles.tunnelStyle} />
			break;

		case EastStatus = UNKNOWN_TUNNEL_STATE:
			EastResolved = <Text>Ei tietoa itäpään tunnelista :( </Text>
			break;
	}

	switch(WestStatus){
		case WestStatus = LANE_OPEN:
			WestResolved = <Text style={styles.tunnelLabelText}>Tunneli on auki!<Image source={require('../../assets/images/tunnel_open.png')} style={styles.tunnelStyle} /></Text>
			break;

		case WestStatus = LANE_CLOSED:
			WestResolved = <Text>Kaista suljettu <Image source={require('../../assets/images/tunnel_lane_closed.png')} style={styles.tunnelStyle} /> </Text>
			break;

		case WestStatus = UNKNOWN_TUNNEL_STATE:
			WestResolved = <Text>Ei tietoa länsipään tunnelista :( </Text>
			break;
	}


	return(		
		<View>
			<Text style={styles.tunnelLabelText}> Itä {EastResolved}</Text>
			<Text style={styles.tunnelLabelText}> Länsi {WestResolved} </Text>
		</View>
	);
}

export default ResolveTunnelStatus;





// {!tunnelState.statusValueWest ?  
// 	<Image source={require('../../assets/images/tunnel_open.png')} style={styles.tunnelStyle} /> : 
// 	<ActivityIndicator animating="true" size="large" color="#0000ff"/>}




const styles = StyleSheet.create({
  tunnelStyle: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
	},
	tunnelLabelText: {
    fontSize: 25,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});