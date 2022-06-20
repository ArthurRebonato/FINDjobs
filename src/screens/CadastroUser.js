import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';
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
        <View style={styles.imagemContainer} >
            <Image 
                style={styles.imagemLogo} 
                source={require("../../assets/logo.png")}
            />
        </View>
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
        

        <StatusBar style="light"/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#b3b3b3'
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
    }, imagemLogo: {
        width: 220,
        height: 200
    }, imagemContainer: {
        alignItems: 'center',
        marginTop: 1,
        marginBottom: 10
    }
});