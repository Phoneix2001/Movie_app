import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { Icon } from "react-native-elements"
import Colors from "../../Utils/Color/colors";

type RatingStarsProps = {
    rating: number;
};

const RatingStar = (props: { name: string }) => (
    <Icon name={props.name} color={Colors.light.primary} size={18}></Icon>
);

const RatingStars = (props: RatingStarsProps) => {
    let [rating,setRating] = useState<string[]>([]);
    useEffect(() => {
        setRating([]) 
        let i: number = 1;
        let temp : string[] = [];
        while (i <= 5) {
            if (i <= props.rating) {
                temp.push("star")
            } else {
                temp.push("star-outline")
            }
            i++;
        }
        setRating(temp)
        //console.log("rating stars",rating)
    },[])
    //console.log("rating stars index 1",rating[0])

    return (
        <View style={styles.container}>
            {
                rating.map((element,index) => (
                    <RatingStar key={index}  name={element} />
                ))
            }
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
     
       
        
        flexDirection: "row",
        //width: '100%',
        //height:300,     

    }
})


export default RatingStars;



