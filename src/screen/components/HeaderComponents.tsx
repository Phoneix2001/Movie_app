import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import { StackNavigationProp } from "@react-navigation/stack";
import Colors from "../../Utils/Color/colors";
import { navigation } from "../../Utils/Navigation/AppRouteConfig";
const HeaderActionButton = () => (
    <Button
      onPress={() => {
        navigation.navigate("ColorGenerator");
      } }

      name="Color generator"
      buttonStyle={{backgroundColor : Colors.light.primary}} />
  );

  export default HeaderActionButton;