import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import * as loginService from "../services/LoginService"

export default function CadastroUser(props) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const {navigation} = props

    const efetuarCadastro = async() => {
        try {
            let retorno = await loginService.createUser(email, senha)
            Alert.alert(retorno)
            navigation.replace("Home")
        } catch (error) {
            Alert.alert("Erro ao cadastrar usuário", error)
        }

    }

  return (
    <View style={styles.container}>
    <View style={styles.containerLogin}>
        <View>
            <Text style={styles.texto}>Informe suas credenciais!</Text>
        </View>
        <View style={styles.caixaTexto}>
            <TextInput style={styles.textoInput}
                placeholder='Informe seu Email'
                autoCapitalize='none'
                keyboardType='email-address'   
                value={email}
                onChangeText={(e) => setEmail(e)}
            />
        </View>
        <View style={styles.caixaTexto}>
            <TextInput style={styles.textoInput}
                placeholder='Informe sua Senha'
                autoCapitalize='none'
                secureTextEntry
                value={senha}
                onChangeText={(e) => setSenha(e)}
            />
        </View>
        <View style={styles.linha}>
            <View style={styles.botao}>
            <Button 
                title='Registrar-se'
                onPress={efetuarCadastro}
            />
            </View>
        </View>
        

        <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0ed7fd'
    },
    containerLogin: {
        backgroundColor: '#fff',
        padding: 25,        
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5
    }, lista: {
        height: 280
    }, texto: {
        fontSize: 16,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 8
    }, caixaTexto: {
        borderWidth: 1,
        padding: 3,
        borderRadius: 10,
        margin: 5,
        marginBottom: 10,
        borderColor: "#a0a0a0"
    }, textoInput: {
        marginLeft: 10
    }, botao: {
        margin: 10
    }
});