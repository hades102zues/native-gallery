import React from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';

const galleryView = () => {

	let images = [];
		for(let i=0; i<4; i++){
			images.push(<Image 
			  style={styles.Images}
			  source={{
			  	uri: 'https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
			  }}

			/>);
		}
	return (
		
		<ScrollView contentContainerStyle={styles.ScrollView}>
			{images}	
		</ScrollView>
		
			
	);
};

const styles = StyleSheet.create({
	Images: { 
		height: 400, 
		width:'100%',
		marginBottom: 10
	},
	ScrollView: {
		alignItems: 'center',
		borderColor:'red',
		borderWidth: 1,

	}

});


export default galleryView;