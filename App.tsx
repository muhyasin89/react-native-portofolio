import { withExpoSnack } from 'nativewind';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from "./app/pages/home/index"
import PostScreen from "./app/pages/post/index"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  
    </NavigationContainer>
  );
}


export default withExpoSnack(App);

