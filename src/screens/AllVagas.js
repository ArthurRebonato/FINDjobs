import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import * as vagaService from "../services/VagaService"
import RegistroVagas from '../components/RegistroVagas';

export default function AllVagas(props) {

    const {navigation} = props
    const [vagas, setVagas] = useState([])

    const buscarVagas = async() => {
        try {
            let dados = await vagaService.getVagas()
            setVagas(dados)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        buscarVagas()
      }, [props])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center"
        })
    }, [])

  return (
    <View style={styles.container}>
        <View style={styles.linha}>
            <View style={styles.botao}>
                <Button 
                    title='Nova Vaga'
                    onPress={() => navigation.navigate("CadastroVagas")}
                />
            </View> 
            <View style={styles.colunaBotao}>
                <View style={styles.botao}>
                    <Button 
                        title='Mapa'
                        onPress={() => navigation.navigate("Mapa")}
                    />
                </View>
            </View>
        </View>
        <View style={styles.containerVagas}>
            <FlatList data={vagas} 
                renderItem={({item}) => <RegistroVagas dados={item} buscarVagas={buscarVagas} excluir={false}/>}
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
    }, colunaBotao: {
        flex: 1,
        flexDirection: "row-reverse",
        marginLeft: 10
    }, botao: {
        margin: 10,
        marginRight: 1
    }, containerVagas: {
        height: "90%"
    }
});