import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
const image = require('../../components/other/image3.jpg');

export const Main_page = () => {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.innerbox1}>
          <Text style={styles.text}>Main Screen</Text>
        </View>


      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  innerbox1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
