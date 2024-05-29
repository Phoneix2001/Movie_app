
import { Dimensions, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import TileButton from './Button';
import NetworkImage from '../../Utils/CommonComponent/NetworkImage';
import RatingStars from './RatingComponent';
import Colors from '../../Utils/Color/colors';
import { MovieDetail } from '../../api/model/MovieDetailsDataObject';
const { width, height } = Dimensions.get("window");
type MovieItemProps = {
  data: MovieDetail;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
function getRandomInt(max : any) {
  return Math.floor(Math.random() * max);
}
const MovieItem = (props: MovieItemProps) => {


  return (
    <View style={{padding:7,display: 'flex',
    width: '100%',}}>
    <View style={styles.container}>
      <NetworkImage style={styles.imageStyle} url={props.data.imageLink ?? ""} clickActive={false}></NetworkImage>
      <View style={styles.desc} >
        <Text style={styles.movieName}>
          {(props.data.title ?? "").trim()}
        </Text>
        <RatingStars rating={getRandomInt(5)}></RatingStars>
      </View>
      <TileButton buttonStyle={styles.buttonStyles} name={'View'} onPress={props.onPress}></TileButton>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {

    
    //height:300,     
   
borderColor:Colors.light.primary,
borderWidth:1,
  },
  imageStyle: {
    height: 200,
    marginVertical: 10,
    alignSelf: 'center',
    width: width * 0.4
  },
  desc: {
    display: 'flex',
    // flexDirection: 'row', 
    marginVertical: 10,
    alignSelf: 'center',
    alignItems:'center'
,    justifyContent: 'space-between',
   
    width: width * 0.46,
  },
  movieName : {width:'100%',textAlign:'center',color:Colors.light.primary},
  buttonStyles: {
    width: '90%',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 30,
  },
});


export default MovieItem;