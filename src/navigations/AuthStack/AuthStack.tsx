import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
//import { LoginScreen } from "$src/screens";

type Routes = {
  LoginScreen: undefined;
};
type RouteName = keyof Routes;

const Stack = createNativeStackNavigator<Routes>();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
}

export type MainStackNavigation = NativeStackNavigationProp<Routes>;
export type MainStackScreen<R extends RouteName> = NativeStackScreenProps<
  Routes,
  R
>;
export default AuthStack;
