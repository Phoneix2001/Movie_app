import Snackbar from "react-native-snackbar";
import Colors from "../Color/colors";


const SnackBar = (message : string) =>  {Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
   backgroundColor : Colors.light.primary,
   rtl: true,
   numberOfLines : 3,
  });}

  export default SnackBar;