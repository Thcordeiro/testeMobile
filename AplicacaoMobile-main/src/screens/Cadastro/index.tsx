import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";




const Cadastro = () => {
    const navigation = useNavigation()
    
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Cadastro</Text>

            <TouchableOpacity
            style={{marginTop: 12, padding: 8,backgroundColor: "#FFF"}}
             onPress={() => navigation.navigate("Cadastro")}>
                <Text>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{marginTop: 12, padding: 8,backgroundColor: "#FFF"}}
            onPress={() => navigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{marginTop: 12, padding: 8,backgroundColor: "#FFF"}}
            onPress={() => navigation.goBack()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default Cadastro