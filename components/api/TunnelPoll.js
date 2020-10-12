import React, { useState, useEffect } from 'react';
import ResolveTunnelStatus from './ResolveTunnelStatus';
import { Text, ActivityIndicator, StyleSheet, Image, View  } from 'react-native';


const TunnelPoll = () => {
	const [loading, setLoading] = React.useState(true);
	const [state, setState] = React.useState(null);
	
	// TESTI DATA
	// {data: {tunneliStatus:{statusValueEast:0,statusValueWest:0}}}

  // const startLoading = () => {
  //   setTimeout(() => {
	// 		setLoading(false);
  //   }, 3000);
	// };
	
	// startLoading();

	useEffect(() => {
		if(loading){
			fetch('https://it101.infotripla.fi/city_app_traffic_data_rest_api/city_specific/tampere/tunneli/tunneli_status_and_area_notifications.php')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setState({ data });
				setLoading(false);
			});
		}
	});

	// Länsipään tunneli
	// https://weathercam.digitraffic.fi/C0457200.jpg
	// console.log(state);

	return(
		<View>
			{loading ? (
				<ActivityIndicator animating={loading} size="large" color="#0000ff"/>	
			) : (
			<>	
			{state ?  
					<ResolveTunnelStatus tunnelState={state} /> : <Text>Yhteysongelma 😢</Text>}
			</>
			)}
			<Image
				source={{
						uri: `https://weathercam.digitraffic.fi/C0460800.jpg`,
				}}
				style={{ width: 300, height: 150 }}/>
			<br />
			<Image
				source={{
						uri: `https://weathercam.digitraffic.fi/C0457200.jpg`,
				}}
				style={{ width: 300, height: 150 }}/>
		</View>
		);
} 

export default TunnelPoll;