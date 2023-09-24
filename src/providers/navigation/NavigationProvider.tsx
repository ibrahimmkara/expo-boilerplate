import React, { PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";

function NavigationProvider({ children }: PropsWithChildren) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
export default NavigationProvider;
