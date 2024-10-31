import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, Image } from 'react-native'
import { fallbackMoviePoster, image500 } from '../api/moviedb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const FavoriteScreen = (props) => {

  const [favoriteData, setFavoriteData] = useState([]);
  const isFocused = useIsFocused();

  // get all the favorites list items
  const getData = async () => {
    let response = await AsyncStorage.getItem('favoritelist');
    if (response) {
      response = JSON.parse(response);
      setFavoriteData(response);
    }
  }

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const deleteSelectedItem = async (item, index) => {

    let tmp = [...favoriteData];

    tmp = tmp.filter(favoriteData => favoriteData !== item);

    setFavoriteData(tmp);

    await AsyncStorage.setItem('favoritelist', JSON.stringify(tmp));

  }

  // this will add empty items to the data array so the UI will be consistent.
  const addEmptyObject = () => {

    const currentLen = favoriteData.length;
    if (currentLen % 3 === 0) {
      return favoriteData
    } else {
      if (currentLen % 3 === 2) {
        return [...favoriteData, null]
      } else if (currentLen % 3 === 1) {
        return [...favoriteData, null, null]
      }
    }
  }

  return (
    <SafeAreaView edges={['top']} style={localStyles.main}>

      <FlatList
        numColumns={3}
        data={addEmptyObject()}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        ListEmptyComponent={() => {
          return (
            <View style={{ height: height / 2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={localStyles.text}>No favorites yet!</Text>
            </View>
          )
        }}
        renderItem={({ item, index }) => {
          if (item)
            return (
              <View
                key={`item_${index}`}
                style={{ flex: 1, borderRadius: 15, minHeight: 200, overflow: 'hidden' }}>
                <TouchableOpacity
                  key={index}
                  style={{ flex: 1 }}
                  onLongPress={() => deleteSelectedItem(item, index)}
                  onPress={() => props.navigation.navigate('Movie', { ...item })}
                >
                  <Image
                    source={{ uri: image500(item?.poster_path) || fallbackMoviePoster }}
                    style={localStyles.image}
                  />
                </TouchableOpacity>
              </View>
            )
          else
            return (
              <View
                key={`item_${index}`}
                style={{ flex: 1 }}
              />
            )
        }}
      />

    </SafeAreaView>
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
  text: {
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
  }
});

export default FavoriteScreen;
