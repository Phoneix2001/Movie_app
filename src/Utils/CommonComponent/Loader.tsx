import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../Color/colors';

type LoaderProps = {
    center? : boolean
   };
const Loader = (props : LoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} color= {Colors.light.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
height:"100%",
justifyContent:'center'
  },
});

export default Loader;
