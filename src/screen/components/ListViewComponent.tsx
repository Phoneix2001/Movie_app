
import MovieItem from "./MovieItem";
import { FlashList } from "@shopify/flash-list";
import { MovieDetail, MovieDetailsDataObject } from "../../api/model/MovieDetailsDataObject";
import { navigation } from "../../Utils/Navigation/AppRouteConfig";

type ListViewComponentProps = {
  list: MovieDetail[] | undefined
};
const ListViewComponent = (props: ListViewComponentProps) => {
 

  return (
    <FlashList
      //ItemSeparatorComponent={() => ( <View style={{height:10}}></View>)}
      data={props.list}
      numColumns={2}
      estimatedItemSize={326}
      // keyExtractor={item => item.movieId.toString()}
      renderItem={({ item }) => (
        <MovieItem data={item} onPress={() => {
          
         // NavigationActions.push({ routeName: 'User', params: {userId} }) 
          navigation.push("MovieDetails", item)
        }} />
      )}></FlashList>)
}

export { ListViewComponent }