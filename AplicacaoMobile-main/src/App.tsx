import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./componentes/Stack/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}


