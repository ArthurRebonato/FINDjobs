import { StyleSheet, View, Text, Button, Alert } from 'react-native'
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
            headerLeft: () => <Button title='Registros' onPress={() => navigation.navigate("CadastroVagas")} />,
            headerRight: () => <Button title='Logoff' color='red' onPress={logoff} />
        })
    }, [])

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <View>
          <Button title='Info'/>
        </View>
        <View style={styles.colunaBotao}>
          <Button title='FAQ'/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
      margin: 5
  }, linha: {
      flexDirection: "row"
  }, colunaBotao: {
    flex: 1,
    flexDirection: "row-reverse",
  }
})