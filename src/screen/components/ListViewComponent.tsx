
import MovieItem from "./MovieItem";
import { FlashList } from "@shopify/flash-list";

type ListViewComponentProps = {
    list : any
   };
   const ListViewComponent = (props : ListViewComponentProps) => {
    return (
 <FlashList 
 
 style={{height:"100%"}}
 //ItemSeparatorComponent={() => ( <View style={{height:10}}></View>)}
 data={props.list}
 numColumns={2}
 estimatedItemSize={326}
// keyExtractor={item => item.movieId.toString()}
 renderItem={({item}) => (
   <MovieItem  data={item}/>
 )}></FlashList>)
   }

   export {ListViewComponent}