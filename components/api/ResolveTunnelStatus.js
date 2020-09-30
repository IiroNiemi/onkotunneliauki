import * as React from 'react';
import { Switch } from 'react-native';
import { Text, ActivityIndicator, StyleSheet, Image, View  } from 'react-native';
	
	// 2 lane closed
	// 0 lanes are open
	// 99 unknown status
const ResolveTunnelStatus = (tunnelState) => {
	let tStatus = [...tunnelState];
	// Lataa tähän SingleLaneInfot
	let	resolvedStatus = null;
	// Tähän tarvitsee muodostaa kakssi switchiä missä käydään molemmat tunnelinpäät läpi
	
	// let EastStatus = {...tunnelState.statusValueEast};
	// const WestStatus = tunnelState.statusValueWest;

	
	console.log(tStatus[0]);
	
	// switch(EastStatus){
	// 	case EastStatus == 0:
	// 		resolvedStatus = <Image source={require('../../assets/images/tunnel_open.png')} style={styles.tunnelStyle} />
	// 		break;

	// 	case EastStatus == 2:
	// 		resolvedStatus = <Image source={require('../../assets/images/tunnel_lane_closed.png')} style={styles.tunnelStyle} />
	// 		break;
			
	// }



	return(		
		<View>
			{resolvedStatus}
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
});