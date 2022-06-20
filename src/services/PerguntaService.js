import db from "../backend/firebaseConnect";
import {collection, addDoc, getDocs, deleteDoc, doc, query, where} from 'firebase/firestore'

export const createPergunta = (dados, uid) => {
    return new Promise(async (resolve, reject) => {
        try {
            dados.uid = uid
            const docId = await addDoc(collection(db, "perguntas"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}

export const getPerguntas = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "perguntas"))
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

export const getPerguntasUid = (uid) => {
    return new Promise(async(resolve, reject) => {
        try {
            const colecao = collection(db, "perguntas")
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

export const deletePergunta = (key) => {
    return new Promise(async(resolve, reject) => {
        try {
            await deleteDoc(doc(db, "perguntas", key))
            resolve()
        } catch (error) {
            reject()
        }
    })
}
