import React, { useState, useLayoutEffect, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from "expo-location"
import * as vagaService from '../services/VagaService'
import { useSelector } from 'react-redux';

export default function Mapa(props) {
    const user = useSelector(store => store.user)
    const {navigation} = props
    const [vagas, setVagas] = useState([])
    const [location, setLocation] = useState({
        coords: {
            latitude: -28.2652821,
            longitude: -52.421083
        }
    })

    const myPosition = async() => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted"){
            return
        } else {
            let myLocation = await Location.getCurrentPositionAsync({})
            setLocation(myLocation)
        }
    }

    const buscarVagas = async() => {
        try {
            let dados = await vagaService.getVagas()
            setVagas(dados)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        myPosition()
        buscarVagas()
    }, [props])

  return (
    <View>
      <MapView style={styles.map}
        initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}>
            {location && <Marker coordinate={
                {latitude: location.coords.latitude, 
                longitude: location.coords.longitude}
                }
                title={user.email}
                icon={require("../../assets/my_location.png")}
                />}
            
            {vagas.map((vaga, key) => <Marker
                key={key}
                coordinate={{
                    latitude: vaga.lat,
                    longitude: vaga.lng
                }}
                title={vaga.nome_empresa}
                icon={require("../../assets/job_location.png")}
                onPress={() => Alert.alert(vaga.nome_empresa,
                    `Cargo: ${vaga.cargo_vaga}\nTipo: ${vaga.tipo_vaga}\nModo: ${vaga.modo_vaga}\nDescrição: ${vaga.descricao}\nEndereço: ${vaga.endereco}\nContato: ${vaga.numero_contato}`)}
            />)}

      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
});