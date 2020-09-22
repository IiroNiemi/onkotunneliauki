import * as React from 'react';
import { Text, ActivityIndicator, StyleSheet, Image, View  } from 'react-native';
	
	// 2 lane closed
	// 0 lanes are open
const ResolveTunnelStatus = (tunnelState) => {
	console.log(tunnelState);
	return(		
		<View>
			{tunnelState ?  
				<Image source={require('../../assets/images/tunnel_open.png')} style={styles.welcomeImage} /> : 
				<ActivityIndicator animating="true" size="large" color="#0000ff"/>}

			{!tunnelState.statusValueWest ?  
				<Image source={require('../../assets/images/tunnel_open.png')} style={styles.welcomeImage} /> : 
				<ActivityIndicator animating="true" size="large" color="#0000ff"/>}
		</View>
	);
}

export default ResolveTunnelStatus;


const styles = StyleSheet.create({
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
});
