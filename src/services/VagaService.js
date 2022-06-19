import db from "../backend/firebaseConnect";
import {collection, addDoc, getDocs, deleteDoc, doc, query, where} from 'firebase/firestore'
import { searchByAddress } from "./LocationService";

export const createVaga = (dados, uid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let coordenadas = await searchByAddress(dados.endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            dados.lat = lat
            dados.lng = lng
            dados.uid = uid
            const docId = await addDoc(collection(db, "vagas"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}

export const getVagas = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "vagas"))
            let registros = []
            querySnapshot.forEach((item) => {
                let data = item.data()
                data.key = item.id
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            reject()
        }
        
    })
}

export const getVagasUid = (uid) => {
    return new Promise(async(resolve, reject) => {
        try {
            const colecao = collection(db, "vagas")
            const q = query(colecao, where("uid","==",uid))
            const querySnapshot = await getDocs(q)
            let registros = []
            querySnapshot.forEach((item) => {
                let data = item.data()
                data.key = item.id
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            reject()
        }
        
    })
}

export const deleteVaga = (key) => {
    return new Promise(async(resolve, reject) => {
        try {
            await deleteDoc(doc(db, "vagas", key))
            resolve()
        } catch (error) {
            reject()
        }
    })
}