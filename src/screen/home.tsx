import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from "react-native";

import Loader from "../Utils/CommonComponent/Loader";
import { ListViewComponent } from "./components/ListViewComponent";
import { MovieDetailsDataObject } from "../api/model/MovieDetailsDataObject";
import { movieListGet } from "../api/repository/MoviesListRepository";
import TileButton from "./components/Button";
import { Text } from "react-native-elements";
import { Appbar } from "react-native-paper";
import { PrimaryAppBar } from "../Utils/CommonComponent/PrimaryAppBar";

export type RootStackParamList = {
  MovieDetails?: { id: number } | undefined;
};


function Home() {
  const isDarkMode: boolean = useColorScheme() === 'dark';
  const [listss, setList] = useState<MovieDetailsDataObject>()
  const [loading, setLoading] = useState<boolean>(true)
const [counter,setCounter]  = useState<number>(0);
  useEffect(() => {
    getMovieList();
  }, [])

  async function getMovieList() {
    let movieListGetData: MovieDetailsDataObject = await movieListGet();

    setList(movieListGetData);

    setLoading(false);
  }
  return (
    <SafeAreaView>
     <PrimaryAppBar centerTitle={true} showBackButton={true}></PrimaryAppBar>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ height: "100%" }}>
        {/* <Text>Counter Value : {counter}</Text>
      <TileButton name={'Increase'} onPress={()=> {setCounter(counter + 1)}}></TileButton>
      <TileButton name={'Decrease'} onPress={()=> {setCounter(counter - 1)}}></TileButton> */}
        {loading === false ? (<ListViewComponent list={listss?.output}></ListViewComponent>) : (<Loader></Loader>)}
      </View>
    </SafeAreaView>
  );
}




export { Home };

