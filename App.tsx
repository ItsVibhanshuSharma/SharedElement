// In App.js in a new project

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {SharedElement} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

import ListScreen from './src/Screen/ListScreen';
import DetailScreen from './src/Screen/DetailScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          sharedElements={(route, otherRoute, showing) => {
            console.log('Routee', route);

            const {item} = route.params;
            console.log('App Screen',item.image);

            return [{id: `item.${item.image}.photo`, animation: 'move'}];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
