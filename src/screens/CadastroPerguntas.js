import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import * as PerguntaService from "../services/PerguntaService"
import RegistroPerguntas from '../components/RegistroPerguntas';
import { useSelector } from 'react-redux';

export default function CadastroPerguntas(props) {
    const [form, setForm] = useState({})
    const {navigation} = props
    const [perguntas, setPerguntas] = useState([])
    const user = useSelector(store => store.user)

    const buscarPerguntas = async() => {
        try {
            let dados = await PerguntaService.getPerguntasUid(user.uid)
            setPerguntas(dados)
        } catch (error) {
            
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: "center"
        }),
        buscarPerguntas()
    }, [])

    const efetuarCadastro = async() => {
        if (form.titulo_pergunta && form.pergunta_descricao){
                try {
                    await PerguntaService.createPergunta(form, user.uid)
                    Alert.alert("Pergunta registrada com sucesso!")
                    setForm({})
                    navigation.navigate("Perguntas", {atualizar: true})
                } catch (error) {
                    Alert.alert("Erro ao registrar Pergunta!")
                }
        } else {
            Alert.alert("Campos preenchidos incorretamente - em branco!")
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Informe o Titulo e a Pergunta:</Text>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Titulo da pergunta'
                    value={form.titulo_pergunta}
                    onChangeText={(value) => setForm(Object.assign({}, form, {titulo_pergunta: value}))}
                />
            </View>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Pergunta'
                    multiline
                    numberOfLines={5}
                    value={form.pergunta_descricao}
                    onChangeText={(value) => setForm(Object.assign({}, form, {pergunta_descricao: value}))}
                />
            </View>
            <View style={styles.linha}>
                <View style={styles.colunaBotao}>
                    <View style={styles.botao}>
                        <Button 
                            title='Registrar Pergunta'
                            onPress={efetuarCadastro}
                        />
                    </View>
                </View>
            </View>

            <StatusBar style="light"/>

            <Text style={styles.texto}>Minhas Perguntas:</Text>
            <FlatList data={perguntas} 
                renderItem={({item}) => <RegistroPerguntas dados={item} buscarPerguntas={buscarPerguntas} excluir={true}/>}
                keyExtractor={item => item.key}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    }, caixaTexto: {
        borderWidth: 1,
        padding: 3,
        width: "97%",
        borderRadius: 10,
        margin: 5,
        marginBottom: 6,
        borderColor: "#a0a0a0"
    }, linha: {
        flexDirection: "row"
    }, colunaBotao: {
        flex: 1,
        flexDirection: "row-reverse",
        marginLeft: 10
    }, texto: {
        fontSize: 16,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 9
    }, textoInput: {
        marginLeft: 10
    }, botao: {
        margin: 10
    }
});
