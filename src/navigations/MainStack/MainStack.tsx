import React from "react";
import { HomeScreen } from "$src/screens";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Header from "$src/components/Header/Header";


type Routes = {
  HomeScreen: undefined;
};
type RouteName = keyof Routes;

const Stack = createNativeStackNavigator<Routes>();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: (_props) => <Header {..._props} />,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "HomeScreen" }}
      />
    </Stack.Navigator>
  );
}

export type MainStackNavigation = NativeStackNavigationProp<Routes>;
export type MainStackScreen<R extends RouteName> = NativeStackScreenProps<
  Routes,
  R
>;
export default MainStack;
