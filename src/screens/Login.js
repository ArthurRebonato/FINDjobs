import React, {useState, useLayoutEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';
import * as loginService from "../services/LoginService"
import { CheckBox } from '@rneui/themed';

import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Login(props) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [lembreme, setLembreme] = useState("")
    const {navigation} = props

    const verificarLembreme = async() => {
        let emailMemory = await AsyncStorage.getItem("email")
        let senhaMemory = await AsyncStorage.getItem("senha")

        if (emailMemory) {
            setEmail(emailMemory)
            setSenha(senhaMemory)
            setLembreme(true)
        }
    }

    useLayoutEffect(() => {
      verificarLembreme()
    }, [])

    const efetuarLogin = async() => {
        try {
            let user = await loginService.login(email, senha)
            navigation.replace("Home")
        } catch (error) {
            Alert.alert("Erro ao efetuar login", error)
        }

    }

    const lembrar = async() => {
        setLembreme(!lembreme)

        if (!lembreme) {
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem('senha', senha)
        } else {
            await AsyncStorage.removeItem("email")
            await AsyncStorage.removeItem("senha")
        }
    }

  return (
    <View style={styles.container}>
    <View style={styles.containerLogin}>
        {/*<View style={styles.imagemContainer} >
            <Image 
                style={styles.imagem} 
                source={require('../Images/GastoCarro.png')}
            />
        </View> */}
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
        <View>
            <CheckBox 
                title="Lembre-me" 
                checked={lembreme} 
                onPress={lembrar}/>
            <View style={styles.botao}>
            <Button 
                title='Logar'
                onPress={efetuarLogin}
            />
            </View>
            <View style={styles.botao}>
                <Button 
                    title='Cadastre-se'
                    onPress={() => navigation.navigate("CadastroUser")}
                    color='red'
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
    }, imagem: {
        borderWidth: 3,
        borderRadius: 50,
        borderColor: "black",
        width: 200,
        height: 180
    }, imagemContainer: {
        alignItems: 'center',
        padding: 20
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