
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Botao from '../../Botao';


const Home = () => {

    return (
        <View style={styles.Container}>
            <Botao title="Iniciar"></Botao>
        </View>
    );
};
export default Home;

const styles = StyleSheet.create({

    Container: {
        bottom: 0,
        padding: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }

});