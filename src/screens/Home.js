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
            headerRight: () => <Button title='Logoff' color='red' onPress={logoff} />
        })
    }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}