import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

function executar(navigation : any){
        navigation.navigate = ('Cadastro');
};

const Botao = (props: {title : string}) => {

    const navigation = useNavigation();

    return (
        <>
        
   <>
     <Button
        title='Get Started'
        onPress={executar}
        
     />
     

   </>
 
        <View style={styles.Container1}>
            <Text style={styles.Texto2}>Gets things with TODs</Text>
        </View>

        <View style={styles.Container1}>
            <Text style={styles.Texto1}>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Conseguat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.Quibusdam nulla dolorum qui laborum ullam, na</Text>
        </View>

        <View style={styles.Container}>
        <TouchableOpacity
            style={styles.Botao}
            onPress={() => executar(navigation)}
        >
        <Text style={styles.Texto}>{props.title}</Text>
        </TouchableOpacity>
        </View>
        </>
    )
};

export default Botao;

const styles = StyleSheet.create({
    Botao: {
        width: 360,
        height: 65,
        padding: 12,
        borderRadius: 10,
        borderColor: "#F381b2",
        backgroundColor: "#F381b2"
    },

    Container: {
        padding: 10,
        bottom: -390
    },

    Container1: {
        padding: 10,
        bottom: -300
    },

    Texto: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 26
    },

    Texto1: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20    
    },

    Texto2: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '900',
        color: '#000000'
    },

});


