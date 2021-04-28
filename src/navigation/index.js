import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "../redux/store/configureStore";
import PreLauncherScreen from "../screens/prelaunch/PreLauncherScreen";
import Authenticated from "./AuthenticatedStack";
import Auth from "./AuthStack";
import Details from "./Details";
import Saloon from "./SaloonStack";

const store = configureStore();

const MainStack = () => {
  const MainStacks = createStackNavigator();

  return (
    <MainStacks.Navigator screenOptions={{ headerShown: false }}>
      <MainStacks.Screen name="PreLauncher" component={PreLauncherScreen} />
      <MainStacks.Screen name="Auth" component={Auth} />
      <MainStacks.Screen name="Authenticated" component={Authenticated} />
      <MainStacks.Screen name="Saloon" component={Saloon} />
      <MainStacks.Screen name="DetailsContainer" component={Details} />
    </MainStacks.Navigator>
  );
};
const RootNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
