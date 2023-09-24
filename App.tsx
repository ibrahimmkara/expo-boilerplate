import React from "react";
import { RootProvider } from "$src/providers/root";
import Root from "$src/navigations/Root";
import "./src/utils/moment";
import { KeyboardAvoidingView, Platform } from "react-native";

function App() {
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <RootProvider>
        <Root />
      </RootProvider>
    </KeyboardAvoidingView>
  );
}

export default App;
