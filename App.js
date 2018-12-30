import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GalleryView from './src/components/GalleryView/GalleryView';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.Header}>
          <Text style={styles.Text}>Gallery</Text>
        </View>
        <GalleryView />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
    Header : {
      justifyContent : 'center',
      alignItems : 'center',
      marginTop: 50
    },
    Text : {
      fontWeight: 'bold',
      fontSize: 50,
    }
});
