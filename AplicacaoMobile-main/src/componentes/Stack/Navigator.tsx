import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "../../screens/Home/Home";
import Cadastro from "../../screens/Cadastro/Cadastro";
import Login from "../../screens/Login/Login";


const Stack = createNativeStackNavigator();


const Navigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Login" component={Login}/>
        
        </Stack.Navigator> 
            
    );

};
export default Navigator;

