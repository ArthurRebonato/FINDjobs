import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import * as vagaService from "../services/VagaService"
import RegistroVagas from '../components/RegistroVagas';
import { useSelector } from 'react-redux';

export default function CadastroVagas(props) {
  const [form, setForm] = useState({})
  const {navigation} = props
  const [vagas, setVagas] = useState([])
  const user = useSelector(store => store.user)

  const buscarVagas = async() => {
    try {
        let dados = await vagaService.getVagasUid(user.uid)
        setVagas(dados)
    } catch (error) {
        
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitleAlign: "center"
    })
    buscarVagas()
  }, [])

  const efetuarCadastro = async() => {

    if (form.nome_empresa && form.cargo_vaga && form.tipo_vaga && form.modo_vaga
        && form.descricao && form.endereco && form.numero_contato){
            try {
                await vagaService.createVaga(form, user.uid)
                Alert.alert("Dados registrado com sucesso!")
                setForm({})
                navigation.navigate("AllVagas", {atualizar: true})
            } catch (error) {
                Alert.alert("Erro ao registrar dados!")
            }
    } else {
        Alert.alert("Campos preenchidos incorretamente - em branco!")
    }
  }
  
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Informe os dados da Vaga:</Text>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Nome da Empresa/Contratante'
                    value={form.nome_empresa}
                    onChangeText={(value) => setForm(Object.assign({}, form, {nome_empresa: value}))}
                />
            </View>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Cargo da Vaga'
                    value={form.cargo_vaga}
                    onChangeText={(value) => setForm(Object.assign({}, form, {cargo_vaga: value}))}
                />
            </View>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Tipo de Vaga (ex: Estágio, Contrato)'
                    value={form.tipo_vaga}
                    onChangeText={(value) => setForm(Object.assign({}, form, {tipo_vaga: value}))}
                />
            </View>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Modo da Vaga (ex: Remoto, Presencial ou Híbrido)'
                    value={form.modo_vaga}
                    onChangeText={(value) => setForm(Object.assign({}, form, {modo_vaga: value}))}
                />
            </View>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Descrição da Vaga'
                    multiline
                    numberOfLines={3}
                    value={form.descricao}
                    onChangeText={(value) => setForm(Object.assign({}, form, {descricao: value}))}
                />
            </View>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Endereço Completo'
                    value={form.endereco}
                    onChangeText={(value) => setForm(Object.assign({}, form, {endereco: value}))}
                />
            </View>
            <View style={styles.caixaTexto}>
                <TextInput style={styles.textoInput}
                    placeholder='Número para Contato'
                    value={form.numero_contato}
                    onChangeText={(value) => setForm(Object.assign({}, form, {numero_contato: value}))}
                />
            </View>
            <View style={styles.linha}>
                <View style={styles.colunaBotao}>
                    <View style={styles.botao}>
                        <Button 
                            title='Registrar Vaga'
                            onPress={efetuarCadastro}
                        />
                    </View>
                </View>
            </View>

            <StatusBar style="light"/>
            <Text style={styles.texto}>Minhas Vagas:</Text>
            <FlatList data={vagas} 
                renderItem={({item}) => <RegistroVagas dados={item} buscarVagas={buscarVagas} excluir={true}/>}
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
    }, coluna: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 5
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