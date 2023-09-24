import React from "react";
import MainStack from "./MainStack/MainStack";
import AuthStack from "./AuthStack/AuthStack";

function Root() {
  if (false) {
    return (
      <div>
        <p>spinner</p>
      </div>
    );
  }

  return <>{true ? <MainStack /> : <AuthStack />}</>;
}

export default Root;
