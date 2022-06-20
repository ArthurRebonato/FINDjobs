import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import React from 'react'
import * as PerguntaService from "../services/PerguntaService"

export default function RegistroPerguntas(props) {

    const data = props.dados

    const excluirPergunta = () => {
        try {
            Alert.alert("Deseja Excluir essa pergunta?", "Essa pergunta vai sumir para sempre!", [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK", onPress: async () => {
                        try {
                          await PerguntaService.deletePergunta(data.key)
                          Alert.alert("Pergunta Excluída com Sucesso!")
                          props.buscarPerguntas()
                        } catch (error) {
                          Alert.alert("Você não possui permissão para excluir essa pergunta!")
                        }
                    }
                }
            ])
            
        } catch (error) {
            
        }
    }

    const botaoExcluir = () => {
        if (props.excluir === true) {
          return <Button title='Excluir' color='red' onPress={excluirPergunta}/>
        } else {
          return 
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.linha}>
            <View style={styles.coluna}>
                    <Text style={styles.campo}>Titulo:</Text>
                    <Text style={styles.textDados}>{data.titulo_pergunta}</Text>
            </View>
            <View style={styles.colunaBotao}>
                <View>
                    {botaoExcluir()}
                </View>
            </View>
        </View>
        <View style={styles.linha}>
            <View style={styles.coluna}>
                <Text style={styles.campo}>Pergunta:</Text>
                <Text style={styles.textDados}>{data.pergunta_descricao}</Text>
            </View>
        </View>
    </View>
    )
}
    
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5
    }, linha: {
        flexDirection: "row"
    }, coluna: {
        flex: 1,
        flexDirection: "row"
    }, campo: {
        width: 75,
        fontWeight: "bold"
    }, textDados: {
        width: "80%"
    }, colunaBotao: {
        flex: 1,
        flexDirection: "row-reverse",
        marginLeft: 10
    }
})
