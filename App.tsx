import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import PostsScreen from './src/pages/PostsScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}
// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application

export default App;
