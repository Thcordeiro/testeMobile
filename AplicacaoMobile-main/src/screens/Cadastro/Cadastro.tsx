
import React, { useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function CadastroScreen( navigation: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}

        />
      </View>
    );
  }
const Cadastro = () => {

    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[senha2, setConfirmesenha] = useState('')

    const dados = {
        nome,
        email,
        senha,
        senha2
    }

    return(
    

        <View>
        
        <Text >Digite seu nome completo</Text>
            <TextInput
                placeholder="Nome"
                value={email}
                onChangeText={setEmail}
                
            />

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
            <Text >Confirme sua Senha</Text>
            <TextInput
                
                placeholder="Confirmesenha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setConfirmesenha}
            />
        </View>
    )

};
export default Cadastro;