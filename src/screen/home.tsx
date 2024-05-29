import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, useColorScheme } from "react-native";

import Loader from "../Utils/CommonComponent/Loader";
import { ListViewComponent } from "./components/ListViewComponent";
import { MovieDetailsDataObject } from "../api/model/MovieDetailsDataObject";
import  PrimaryAppBar  from "../Utils/CommonComponent/PrimaryAppBar";
import { IconButton } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { movieDetailsGet } from "../viewmodel/MovieDetailsPageViewModel";
import { ApiResponse, Status } from "../api/network/ApiResponse";

export type RootStackParamList = {
  MovieDetails?: { id: number } | undefined;
};


function Home() {
  const dispatch = useAppDispatch();
  const movieList :ApiResponse<MovieDetailsDataObject> = useAppSelector((state) => state.MOVIE.movieApiResponse);

  useEffect(() => {
     getMovieList();
  }, [])

  async function getMovieList() {
   dispatch(movieDetailsGet);
  }

  const ListOfIcon = ()=>{
    return (
      <View>
      <IconButton icon={"dots-vertical"} iconColor="white" 
      ></IconButton>
      </View>
    )
  }


  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'} />
     <PrimaryAppBar  listOfIcon={<ListOfIcon/>} centerTitle={true} showBackButton={true}></PrimaryAppBar>
     {/* {movieData.map((item) =>  ( <Text style={{color:'blue', fontSize:20}}>{item.title.toString()}</Text>))} */}
     
      <View style={{ height: "100%" }}>
        {/* <Text>Counter Value : {counter}</Text>
      <TileButton name={'Increase'} onPress={()=> {setCounter(counter + 1)}}></TileButton>
      <TileButton name={'Decrease'} onPress={()=> {setCounter(counter - 1)}}></TileButton> */}
        {movieList.status  === Status.COMPLETED ? (<ListViewComponent list={movieList?.data?.output}></ListViewComponent>) : (<Loader></Loader>)}
      </View>
    </SafeAreaView>
  );
}





export { Home };

