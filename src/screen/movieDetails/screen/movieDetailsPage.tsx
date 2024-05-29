import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Colors from '../../../Utils/Color/colors';
import { MovieDetail, MovieDetailsDataObject } from '../../../api/model/MovieDetailsDataObject';
import NetworkImage from '../../../Utils/CommonComponent/NetworkImage';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-elements';
import  movieListGet  from '../../../api/repository/MoviesListRepository';
import Loader from '../../../Utils/CommonComponent/Loader';
import { ListViewComponent } from '../../components/ListViewComponent';
import PrimaryYoutubePlayer from '../components/YoutubePlayer';
import TileButton from '../../components/Button';
import { selectOneMovie } from '../../../redux/slice/movieSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store/hooks';
import { ApiResponse, Status } from '../../../api/network/ApiResponse';
const {height, width } = Dimensions.get("window");


function MovieDetailsPage() {
  /// Selector
  const movieDetails: MovieDetail = useAppSelector(selectOneMovie);
  const movieList :ApiResponse<MovieDetailsDataObject> = useAppSelector((state) => state.MOVIE.movieApiResponse);
  const [isTrailerView,setTrailerView] = useState<boolean>(false);
  /// Dispatcher
  const dispatch = useAppDispatch();

  useEffect(() => {    
    dispatch(movieListGet);
  },[]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <NetworkImage url={movieDetails?.imageLink || ""} style={styles.imageStyle} resizeMode={FastImage.resizeMode.contain}></NetworkImage>
        <TileButton buttonStyle={styles.buttonStyles} name={'Watch Trailer'} onPress={() => {
          setTrailerView(true);
        }}></TileButton>
       { isTrailerView ? <PrimaryYoutubePlayer url={movieDetails?.trailer_link} /> : <></>}
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

      {movieList.status === Status.COMPLETED ? (<ListViewComponent list={movieList.data?.output}></ListViewComponent>) : (
            <View style={{ height: 100 }}>
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
    fontWeight: 'bold',

    alignSelf: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    left: "70%",
    top : height * 0.21
  },
});



export { MovieDetailsPage };

