import React, { useState, useEffect } from 'react';
import ResolveTunnelStatus from './ResolveTunnelStatus';
import { Text, ActivityIndicator, StyleSheet, Image, View  } from 'react-native';


const TunnelPoll = () => {
	const [loading, setLoading] = React.useState(false);
	const [state, setState] = React.useState({data: {tunneliStatus:{statusValueEast:2,statusValueWest:0}}});
	
	// TESTI DATA
	// {data: {tunneliStatus:{statusValueEast:0,statusValueWest:0}}}

  // const startLoading = () => {
  //   setTimeout(() => {
	// 		setLoading(false);
  //   }, 3000);
	// };
	
	// startLoading();

	// useEffect(() => {
	// 	if(loading){
	// 		fetch('https://it101.infotripla.fi/city_app_traffic_data_rest_api/city_specific/tampere/tunneli/tunneli_status_and_area_notifications.php')
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setState({ data });
	// 			setLoading(false);
	// 		});
	// 	}
	// });

	// Tämä fetch palauttaa .php kuvan.
	// https://it101.infotripla.fi/traffic_camera/fetchPicture.php?if=1&cameraid=C04608&presetid=C0460800&preventCache=1589126551073

	console.log(state);

	return(
		<View>
			{loading ? (
				<ActivityIndicator animating={loading} size="large" color="#0000ff"/>	
			) : (
			<>	
			{state ?  
					<ResolveTunnelStatus tunnelState={state} /> : <Text>Yhteysonglema 😢</Text>}
			</>
			)}
		</View>
		);
} 

export default TunnelPoll;