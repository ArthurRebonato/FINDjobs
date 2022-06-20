import { StyleSheet, View, Text, Button, Alert, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import * as loginService from '../services/LoginService'

export default function Home(props) {

    const {navigation} = props

    const logoff = async() => {
        try {
            await loginService.logoff()
            navigation.replace("Login")
        } catch (error) {
            Alert.alert(error)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center",
            headerLeft: () => <Button title='Registros' onPress={() => navigation.navigate("AllVagas")} />,
            headerRight: () => <Button title='Logoff' color='red' onPress={logoff} />
        })
    }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.linha}>
          <View>
            <Button title='Info' color="green" onPress={() => navigation.navigate("Sobre")}/>
          </View>
          <View style={styles.colunaBotao}>
            <Button title='FAQ' color="green" onPress={() => navigation.navigate("FAQ")}/>
          </View>
        </View>
        <View>
          <View style={styles.imagemContainerLogo} >
              <Image 
                  style={styles.imagemLogo} 
                  source={require("../../assets/logo.png")}
              />
          </View>
          <View>
            <Text style={styles.texto}>Modo que foi feito:</Text>
            <Text style={{textAlign: 'center'}}>
              Nesse aplicativo optei pelo uso do React Native Expo, pelo motivo de ser mais fácil o 
              desenvolvimento, podendo escrever um aplicativo em poucos minutos, por ser um projeto 
              não muito complexo e pela instalação e configuração simples. Além, de ter estudado e 
              utilizado por mais tempo do que o CLI.
            </Text>
            <View style={styles.imagemContainer} >
                <Image 
                    style={styles.imagem} 
                    source={require("../../assets/expo.png")}
                />
            </View>
          </View>
          <View>
            <Text style={styles.texto}>Arquitetura de software do projeto:</Text>
            <View style={styles.linha}>
              <View style={styles.coluna}>
                <Text style={{marginLeft: 30, fontWeight: 'bold'}}>Pastas</Text>
              </View>
              <View style={styles.coluna}>
                <Text style={{marginLeft: 30, fontWeight: 'bold'}}>Explicação</Text>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.coluna}>
                  <Text style={styles.campo}>- Backend:</Text>
                  <Text style={styles.textDados}>Possui o arquivo que faz a conexão com o banco de dados, que nesse é o Firebase.</Text>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.coluna}>
                  <Text style={styles.campo}>- Components:</Text>
                  <Text style={styles.textDados}>Possui os arquivos de componentes que emprega uma funcionalidade, nesse projeto temos o Registro que exibe as vagas.</Text>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.coluna}>
                  <Text style={styles.campo}>- Screens:</Text>
                  <Text style={styles.textDados}>Possui os arquivos de cada tela do aplicativo com seus códigos, como Login, Vagas, etc.</Text>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.coluna}>
                  <Text style={styles.campo}>- Services:</Text>
                  <Text style={styles.textDados}>Possui os arquivos que fazem os serviços, não precisando de uma interface de usuário, como actions, reducers e outras services.</Text>
              </View>
            </View>
          </View>
        </View>

        <StatusBar style="light"/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
      margin: 5
  }, linha: {
      flexDirection: "row"
  }, coluna: {
      flex: 1,
      flexDirection: "row",
      marginLeft: 5,
      marginBottom: 5
  }, campo: {
      width: 120,
      fontWeight: "bold"
  }, textDados: {
      width: "65%",
      textAlign: 'center'
  }, colunaBotao: {
      flex: 1,
      flexDirection: "row-reverse",
  }, texto: {
      fontSize: 16,
      fontWeight:'bold',
      textAlign: 'center',
      marginBottom: 8
  }, imagem: {
      borderWidth: 2,
      borderRadius: 30,
      borderColor: "black",
      width: 250,
      height: 120
  }, imagemLogo: {
      width: 200,
      height: 180
  }, imagemContainer: {
      alignItems: 'center',
      padding: 20
  }, imagemContainerLogo: {
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 20
  }
})