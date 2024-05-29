
import MovieItem from "./MovieItem";
import { FlashList } from "@shopify/flash-list";
import { MovieDetail } from "../../api/model/MovieDetailsDataObject";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { addOneMovie } from "../../redux/slice/movieSlice";
import { useAppDispatch } from "../../redux/store/hooks";


type ListViewComponentProps = {
  list: MovieDetail[] | undefined
};
const ListViewComponent = (props: ListViewComponentProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const dispatch = useAppDispatch();

  
  const handleViewCallBack = (item: MovieDetail) => {
    //console.log(item);
    dispatch(addOneMovie(item));
    // NavigationActions.push({ routeName: 'User', params: {userId} }) 
    navigation.push("MovieDetails");
  };
  
  return (
    <FlashList
      //ItemSeparatorComponent={() => (<View style={{height:10}}></View>)}
      data={props.list}
      numColumns={2}
      estimatedItemSize={326}
      // keyExtractor={item => item.movieId.toString()}
      renderItem={({ item }) => (
        <MovieItem data={item} onPress={() => {
          handleViewCallBack(item);
        }} />
      )}></FlashList>
  );
}

export { ListViewComponent }