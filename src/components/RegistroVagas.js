import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import React from 'react'
import * as vagaService from "../services/VagaService"

export default function RegistroVagas(props) {

    const data = props.dados

    const excluirVaga = () => {
        try {
            Alert.alert("Deseja Excluir essa vaga?", "Esses dados vão sumir para sempre!", [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK", onPress: async () => {
                        try {
                          await vagaService.deleteVaga(data.key)
                          Alert.alert("Dados Excluídos com Sucesso!")
                          props.buscarVagas()
                        } catch (error) {
                          Alert.alert("Você não possui permissão para excluir esse registro!")
                        }
                    }
                }
            ])
        } catch (error) {
            
        }
    }

    const botaoExcluir = () => {
      if (props.excluir === true) {
        return <Button title='Excluir' color='red' onPress={excluirVaga}/>
      } else {
        return 
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <View style={styles.coluna}>
              <Text style={styles.campo}>Empresa:</Text>
              <Text style={styles.textDados}>{data.nome_empresa}</Text>
        </View>
        <View style={styles.colunaBotao}>
            <View>
                {botaoExcluir()}
            </View>
        </View>
      </View>
      <View style={styles.linha}>
        <View style={styles.coluna}>
            <Text style={styles.campo}>Cargo:</Text>
            <Text style={styles.textDados}>{data.cargo_vaga}</Text>
        </View>
      </View>
      <View style={styles.linha}>
        <View style={styles.coluna}>
            <Text style={styles.campo}>Endereço:</Text>
            <Text style={styles.textDados}>{data.endereco}</Text>
        </View>
      </View>
      <View style={styles.linha}>
        <View style={styles.coluna}>
            <Text style={styles.campo}>Contato:</Text>
            <Text style={styles.textDados}>{data.numero_contato}</Text>
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
        width: "85%"
    }, colunaBotao: {
      flex: 1,
      flexDirection: "row-reverse",
      marginLeft: 10
    }
})