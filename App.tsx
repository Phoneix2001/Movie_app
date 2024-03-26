import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Home } from './src/screen/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieDetailsPage } from './src/screen/movieDetails/screen/movieDetailsPage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Colors from './src/Utils/Color/colors';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import {ColorGenerator} from './src/screen/randomComponets/ColorGenrator';
import HeaderActionButton from './src/screen/components/HeaderComponents';

const Stack = createNativeStackNavigator();




function App(): React.JSX.Element {
 
  



 

 
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'

        screenOptions={() => ({ 
         headerShown:false
        })}>
        <Stack.Screen name="Movies" component={Home} options={{
               
        }}/>
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
