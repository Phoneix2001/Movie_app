import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Colors from "../Color/colors";
import { IconButton } from "react-native-paper";

type PrimaryAppBarProps = {
    title?: string,
    centerTitle? : boolean,
    showBackButton? : boolean
};

const PrimaryAppBar = (props: PrimaryAppBarProps) => {
    return (
        <View style={styles.appBarStyle} >
            {props.showBackButton ? <IconButton icon={"back"} style ={{backgroundColor : Colors.light.primary}}></IconButton> : <View/>}
            <Text style={[props.centerTitle ? {alignSelf:"center"} : {} , styles.appBarTextStyle]}>{props.title || "Movie"}</Text>
        </View>
    );
};

export { PrimaryAppBar }



const styles = StyleSheet.create({

    appBarStyle: {
        flexDirection:'row',
        height: 60,
        elevation: 15,
        
        
        backgroundColor: Colors.light.primary,
    },
    appBarTextStyle: {
        marginLeft:10,
        
color: Colors.light.white,

fontSize:18
    }

});