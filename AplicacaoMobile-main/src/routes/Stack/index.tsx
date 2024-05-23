import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home";
import Cadastro from "../../screens/Cadastro";
import Login from "../../screens/Login";


const { Navigator,  Screen} = createStackNavigator()

export default function(){
    return(
        <Navigator initialRouteName="Home"> 
            <Screen name="Home" component={Home}/>
            <Screen name="Cadastro" component={Cadastro}/>
            <Screen name="Logim" component={Login}/>
        </Navigator>
    )

}
