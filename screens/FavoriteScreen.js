import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, StyleSheet, Dimensions } from 'react-native'
import { getFavorites, fetchMovieDetails, image185, fallbackMoviePoster } from '../api/moviedb';
const { width, height } = Dimensions.get('window');

const FavoriteScreen = () => {
    
    return (
        <View style={localStyles.main}>
        
          <Text style={localStyles.text}>No favorites yet!</Text>
        
      </View>
    );
  };

const localStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#333333",
    padding: 10
  },
  view: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center"
  },
  text:{
    color: "#FFF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20
  },
  image: {
    borderRadius: 12,
    width: width * 0.33,
    height: height * 0.22,
    marginBottom: 10,
  }
});

export default FavoriteScreen;
