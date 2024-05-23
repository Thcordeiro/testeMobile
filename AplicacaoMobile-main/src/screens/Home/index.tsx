import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";




const Home = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Home</Text>

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
        </View>
    )
}

export default Home





