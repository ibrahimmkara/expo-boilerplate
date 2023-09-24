import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import { QueryProvider } from "../query";
import { StoreProvider } from "../store";
import { DesingProvider } from "../desing";
import { NavigationProvider } from "../navigation";

function RootProvider({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <QueryProvider>
        <DesingProvider>
          <NavigationProvider>
            <SafeAreaProvider>{children}</SafeAreaProvider>
          </NavigationProvider>
        </DesingProvider>
      </QueryProvider>
    </StoreProvider>
  );
}

export default RootProvider;
