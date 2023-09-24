import React, { PropsWithChildren } from "react";
import { NativeBaseProvider } from "native-base";

function DesignProvider({ children }: PropsWithChildren) {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
}

export default DesignProvider;
