import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Home } from './src/screen/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieDetailsPage } from './src/screen/movieDetails/screen/movieDetailsPage';
import { NavigationContainer } from '@react-navigation/native';
import {ColorGenerator} from './src/screen/randomComponets/ColorGenrator';

const Stack = createNativeStackNavigator();




function App(): React.JSX.Element {
 
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'
        screenOptions={() => ({ 
         headerShown:false
        })}>
        <Stack.Screen name="Movies" component={Home} options={{ }}/>
        <Stack.Screen name="MovieDetails" component={MovieDetailsPage} />
        <Stack.Screen name="ColorGenerator" component={ColorGenerator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});


export default App;
