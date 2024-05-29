import React, {useState} from 'react';
import {Button, GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Colors from '../../Utils/Color/colors';

type TileButtonProps = {
  name: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
};

const TileButton = (props: TileButtonProps) => {
 return (
    <View style={props.buttonStyle || styles.container}>
    <TouchableOpacity style ={styles.container} onPress={props.onPress} >
    <View style={styles.button}>
    <Text style={styles.textStyle}>{props.name}</Text>
     </View>
     </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
    
    container: {
        width:'100%',
        borderRadius:15,
        elevation:15,
        backgroundColor: Colors.light.primary,
      },
      button: {
        display:'flex',
        paddingVertical:10,
        justifyContent:'center',
        borderRadius:15,
        alignItems:'center',
        paddingHorizontal : 3,
        elevation:15,
        backgroundColor: Colors.light.primary,
      },
      textStyle:{
        color:Colors.light.textPrimary
      }
  });
  

export default TileButton;