import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyB2Obrp2Y-KFK5QhWgCqW5LY5HAly-kQv8")

export const searchByAddress = (endereco) => {
    return new Promise((resolve, reject) => {
        Geocoder.from(endereco)
        .then(result => {
            var location = result.results[0].geometry.location
            resolve(location)
        }).catch(error => {
            reject(error)
        })
    })
}