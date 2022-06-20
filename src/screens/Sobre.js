import { StyleSheet, View, Text, Button, Alert, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'

export default function Sobre(props) {
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
                    style={styles.imagemUser} 
                    source={require("../../assets/desenvolvedor.png")}
                />
            </View>
            <View>
                <Text style={styles.texto}>Arthur Rebonato</Text>
                    <Text style={styles.campo}>arthur.rebonato@hotmail.com</Text>
                    <Text style={styles.campo}>Tópicos Especiais em Programação</Text>
                    <Text style={styles.campo}>Professor Marcos Roberto dos Santos</Text>
                    <Text style={styles.campo}>IMED | 5º Semestre - 2022</Text>
                    <Text style={styles.campo}>RA - 1120468</Text>
            </View>
            <View style={styles.imagemContainerImed} >
                <Image 
                    style={styles.imagemImed} 
                    source={require("../../assets/imed.png")}
                />
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
        textAlign: 'center'
    }, coluna: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 5,
        marginBottom: 5
    }, campo: {
        fontSize: 16, 
        textAlign: 'center', 
        fontStyle: 'italic',
        marginBottom: 8
    }, texto: {
        fontSize: 25,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 8
    }, imagemUser: {
        width: 200,
        height: 190
    }, imagemImed: {
        width: 220,
        height: 100
    }, imagemContainer: {
        alignItems: 'center',
        padding: 20
    }, imagemContainerImed: {
        position: "absolute",
        top: "125%",
        alignSelf: "center"
    }
  })