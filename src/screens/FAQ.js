import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'

export default function FAQ(props) {

    const {navigation} = props

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center"
        })
    }, [])

  return (
    <View style={styles.container}>
        <View>
            <View style={styles.imagemContainer} >
                <Image 
                    style={styles.imagem} 
                    source={require("../../assets/funcionalidade.png")}
                />
            </View>
            <View style={styles.linha}>
                <Text style={styles.texto}>- Na Home é possível fazer o Logoff, além de abrir a tela de 
                Funcionalidades e Informações do desenvolvedor.</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.texto}>- Na tela de Registros, clicando no botão no Home, é possível 
                visualizar todos as vagas disponíveis no aplicativo.</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.texto}>- Na tela de Nova Vaga, clicando no botão na tela de Registros, 
                é possível fazer o cadastro de uma nova vaga no app, além de mostrar todas as vagas que 
                cadastrei logo abaixo.</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.texto}>- Na tela de Mapa, clicando no botão na tela de Registros, é 
                possível visualizar a localização das vagas no mapa geográfico, sendo possível ver informações
                clicando em cima da localização, além de mostrar a sua localização atual.</Text>
            </View>
        </View>
        <View style={styles.linha}>
            <View style={styles.colunaBotao}>
                <View style={styles.botao}>
                    <Button 
                        title='Perguntas'
                        onPress={() => navigation.navigate("Perguntas")}
                    />
                </View>
            </View>
        </View>

      <StatusBar style="light"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5
    }, linha: {
        flexDirection: "row",
        textAlign: 'center',
        marginBottom: 8
    }, texto: {
        fontSize: 16
    }, imagem: {
        width: 300,
        height: 170
    }, imagemContainer: {
        alignItems: 'center',
        backgroundColor: '#fff', 
        padding: 10,     
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    }, colunaBotao: {
        flex: 1,
        flexDirection: "row-reverse",
        marginLeft: 1
    }, botao: {
        marginLeft: 1,
        marginTop: 15
    }
  })