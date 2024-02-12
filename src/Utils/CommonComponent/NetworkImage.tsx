import { useState } from "react";
import { GestureResponderEvent, Modal, StyleProp, TouchableOpacity, View } from "react-native";
import FastImage, { ImageStyle } from "react-native-fast-image";

type NetworkImageProps = {
    url: string;
    style:StyleProp<ImageStyle>; 
    clickActive?: boolean;
  };
  
  const NetworkImage = (props: NetworkImageProps) => { 
//const [modalVisible,setModalVisibilty] = useState(false);
return (
    <View>
        {/* <TouchableOpacity onPress={() => { onPress()}}> */}
    <FastImage
    style={props.style}
    source={{
        uri: props.url,
        priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.cover}/>
{/* /></TouchableOpacity> */}
{/* <Modal
          visible={modalVisible}
          transparent={true}

          onRequestClose={() => { setModalVisibilty(false) }}
        >
              <FastImage
    style={{ flex:1 }}
    source={{
        uri: props.url,
        priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
/>
        </Modal> */}
        </View>
)

//function onPress()  {  setModalVisibilty(true); }
 
  }



   export default NetworkImage;