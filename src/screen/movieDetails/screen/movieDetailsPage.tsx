import React, { useEffect, useState } from 'react';
import { Dimensions, GestureResponderEvent, ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Colors from '../../../Utils/Color/colors';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MovieDetail, MovieDetailsDataObject, MovieDetailsDataObjectSchema } from '../../../api/model/MovieDetailsDataObject';
import NetworkImage from '../../../Utils/CommonComponent/NetworkImage';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-elements';
import { movieListGet } from '../../../api/repository/MoviesListRepository';
import Loader from '../../../Utils/CommonComponent/Loader';
import { ListViewComponent } from '../../components/ListViewComponent';
import TileButton from '../../components/Button';
const { width, height } = Dimensions.get("window");

type MovieDetailsPageProps = {
  name: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
};

function MovieDetailsPage() {
  const route = useRoute<RouteProp<any, 'MovieDetails'>>();
  const [movieDetails, setMovieDetail] = useState<MovieDetail>();
  const [listss, setList] = useState<MovieDetail[]>()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setMovieDetail(MovieDetail.parse(route.params));
    console.log('====================================');
    console.log(route.params);
    console.log('====================================');
    getMovieList();
  }, [])
  async function getMovieList() {
    let movieListGetData: MovieDetailsDataObject = await movieListGet();
 
      const length : number = movieListGetData.output.length;
      movieListGetData.output.splice(length / 4 ,length)
      setList( movieListGetData?.output.filter((element) => element.title !== route.params?.title));
    //   console.log(index);
    //   if (index != undefined && index > -1) {
    //     movieListGetData?.output.splice(index, 1); // Remove 1 element at index
    //   }
    // setList(movieListGetData);
    setLoading(false);
   
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <NetworkImage url={movieDetails?.imageLink || ""} style={styles.imageStyle} resizeMode={FastImage.resizeMode.contain}></NetworkImage>
        <Text style={styles.textStyleTitle}>
          {movieDetails?.title}
        </Text>
        <Text style={styles.textStyleGenre}>
          {movieDetails?.genres}
        </Text>
      
        <Text style={styles.textStyleDesc}>
          {movieDetails?.description}
        </Text>
        <Text style={styles.textStyleSubTitle}>
          {"Recommented movies"}
        </Text>
      
        <View style={{ height: "100%" }}>
         
          {loading === false ? (<ListViewComponent list={listss}></ListViewComponent>) : (
          <View style={{height : 100}}>
          <Loader></Loader> 
          </View>)}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleDesc: {
    color: "grey",
    margin: 10,
    textAlign: "center",

  },
  textStyleTitle: {
    color: Colors.light.primary,
    fontWeight: "bold",
    margin: 10,
    fontSize: 22,
    textAlign: "center"
  },
  textStyleSubTitle: {
    color: Colors.light.primary,
    fontWeight: "800",
    margin: 10,
    fontSize: 18,
    textAlign: 'left'
  },
  textStyleGenre: {
    color: Colors.light.primary,
    fontWeight: "bold",
    margin: 10,
    fontSize: 18,
    textAlign: "center"
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light.white,
  },
  imageStyle: {
    height: 200,
    marginVertical: 10,
    alignSelf: 'center',
    width: width * 0.9
  },
  buttonStyles: {
    width: '90%',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 30,
  },
});



export { MovieDetailsPage };