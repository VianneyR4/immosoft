import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HommeScreen  from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";

const screens = {
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Home: {
        screen: HommeScreen
    },
    Profile: {
        screen: ProfileScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);