import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import * as PerguntaService from "../services/PerguntaService"
import RegistroPerguntas from '../components/RegistroPerguntas';

export default function Perguntas(props) {

    const {navigation} = props
    const [perguntas, setPerguntas] = useState([])

    const buscarPerguntas = async() => {
        try {
            let dados = await PerguntaService.getPerguntas()
            setPerguntas(dados)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        buscarPerguntas()
      }, [props])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center",
            headerRight: () => <Button title='Home' onPress={() => navigation.navigate("Home")} />
        })
    }, [])

  return (
    <View style={styles.container}>
        <View style={styles.linha}>
            <View style={styles.botao}>
                <Button 
                    title='Nova Pergunta'
                    onPress={() => navigation.navigate("CadastroPerguntas")}
                />
            </View> 
        </View>
        <View style={styles.containerPerguntas}>
            <FlatList data={perguntas} 
                renderItem={({item}) => <RegistroPerguntas dados={item} buscarPerguntas={buscarPerguntas} excluir={false}/>}
                keyExtractor={item => item.key}
            />
        </View>

        <StatusBar style="light"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    }, linha: {
        flexDirection: "row"
    }, botao: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: "33%"
    }, containerPerguntas: {
        height: "90%"
    }
});
