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
			EastResolved = <Image source={require('../../assets/images/tunnel_open.png')} style={styles.tunnelImage	} />
			break;

		case EastStatus = LANE_CLOSED:
			EastResolved = <Image source={require('../../assets/images/tunnel_lane_closed.png')} style={styles.tunnelImage	} />
			break;

		case EastStatus = UNKNOWN_TUNNEL_STATE:
			EastResolved = <Text>Ei tietoa itäpään tunnelista  😢 </Text>
			break;
	}

	switch(WestStatus){
		case WestStatus = LANE_OPEN:
			WestResolved = <Image source={require('../../assets/images/tunnel_open.png')} style={styles.tunnelImage	} />
			break;

		case WestStatus = LANE_CLOSED:
			WestResolved = <Image source={require('../../assets/images/tunnel_lane_closed.png')} style={styles.tunnelImage	} />
			break;

		case WestStatus = UNKNOWN_TUNNEL_STATE:
			WestResolved = <Text>Ei tietoa länsipään tunnelista 😢 </Text>
			break;
	}


	return(		
		<View style={styles.container}>
			<Text style={styles.tunnelLabelText}>Itä </Text> 
			{EastResolved}
			<Text style={styles.tunnelLabelText}>Länsi</Text> 
			{WestResolved} 
		</View>
	);
}

export default ResolveTunnelStatus;

const styles = StyleSheet.create({
	container: {
		flex: 1,
  },
  tunnelImage	: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
	},
	tunnelLabelText: {
		flex: 1,
		fontSize: 25,
		marginLeft: 6,
  },
});