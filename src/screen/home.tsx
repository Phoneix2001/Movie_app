import React, { useEffect, useState } from "react";
import {  SafeAreaView,  StatusBar,  View,  useColorScheme } from "react-native";

import Loader from "../Utils/CommonComponent/Loader";
import { ListViewComponent } from "./components/ListViewComponent";

// URL of the Google Apps Script web app
const url = 'https://script.google.com/macros/s/AKfycbwRPdoGh0swb1zc24MxJx1kAy2Bm4mf3vIrU8PDaPBXbAZ8IqXmYV_RG08IiNfQtEIW/exec';

// Define a function to make the HTTP request
async function fetchData() : Promise<any> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
   // console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function Home() {
    const isDarkMode = useColorScheme() === 'dark';
  const [listss,setList] = useState<any>([])
  const [loading,setLoading] = useState<boolean>(true)
    
  useEffect(() => {
      getData();
        },[])



    async function getData()  {
     await fetchData().then((value: any) => {
      console.log(value,"Value 123")
        setList(value.output);
        setLoading(false)
        console.log(listss)
      });
    }



    return (
      <SafeAreaView style={{}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
          
     <View style={{height:"100%" }}>
               {loading === false ?( <ListViewComponent list={listss}></ListViewComponent> ):(<Loader></Loader>) }
               </View>
       
        
        
      </SafeAreaView>
    );
  }


  
  export { Home };