import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Colors from "../Color/colors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
type PrimaryAppBarProps = {
    title?: string,
    centerTitle?: boolean,
    showBackButton?: boolean,
    listOfIcon?: React.JSX.Element,
};

const PrimaryAppBar = (props: PrimaryAppBarProps) => {
   
    return (
        <View style={styles.appBarStyle} >
            {/* {props.showBackButton ? <IconButton icon={""} style={{ backgroundColor: Colors.light.primary }}></IconButton> : <View />} */}
            <Text style={[props.centerTitle ? { alignSelf: "center" } : {}, styles.appBarTextStyle]}>{props.title || "Movie"}</Text>
            {props.listOfIcon}
           
        </View>
    );
};

export default PrimaryAppBar;



const styles = StyleSheet.create({

    appBarStyle: {
        flexDirection: 'row',
        height: 60,
        elevation: 15,
        backgroundColor: Colors.light.primary,
    },
    appBarTextStyle: {
        marginLeft: 10,
        color: Colors.light.white,
        fontSize: 18,
    
        flex:1
    }

});