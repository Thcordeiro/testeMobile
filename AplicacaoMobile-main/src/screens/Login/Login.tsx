
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



function LoginScreen ( navigation: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Principal "
          onPress={() => navigation.navigate('Principal')}
        />
         <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

const Login = () => {


    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const dados = {
        email,
        senha
    }

    return (
        <>

        <View >
        
            <Text >Bem-vindo</Text>
            

            <Text >Digite seu email</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                
            />
            <Text >Digite sua senha</Text>
            <TextInput
                
                placeholder="Senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
            />
        </View>

     



        </>
    );
};


export default Login;