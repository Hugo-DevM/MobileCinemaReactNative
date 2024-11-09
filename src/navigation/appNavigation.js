import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          // Return the icon component from react-native-vector-icons
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#eab308', // Color activo (por ejemplo, morado)
        tabBarInactiveTintColor: 'gray',  // Color inactivo
        tabBarLabelStyle: {
          fontSize: 14, // Tamaño de la letra
          fontWeight: 'bold', // Estilo de la letra
        },
        tabBarStyle: {
          backgroundColor: '#333333', // Color de fondo de la barra
          paddingBottom: 20, // Espaciado para el texto
          height: 80, // Altura de la barra de navegación
        },
      })}
    >
      <Tab.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Tab.Screen name="Favorites" options={{headerShown: false}} component={FavoriteScreen} />
      </Tab.Navigator>
  );
}
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="MainTabs" options={{ headerShown: false }} component={TabNavigator}/>
        <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
        <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
