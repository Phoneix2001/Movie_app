import React, { useCallback, useState } from "react";
import { View, Button, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
const {height, width } = Dimensions.get("window");
type PrimaryYoutubePlayerProps = {
  url? : string,
  autoPlay?:boolean
}

const PrimaryYoutubePlayer = (props : PrimaryYoutubePlayerProps) => {
    const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
    
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View >
      <YoutubePlayer
        height= {height/3.4}
        play={playing}
        forceAndroidAutoplay={props.autoPlay ?? false}
        videoId={props.url || "iee2TATGMyI"}
        onChangeState={onStateChange}
      /> 
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
  );
}

export default PrimaryYoutubePlayer;