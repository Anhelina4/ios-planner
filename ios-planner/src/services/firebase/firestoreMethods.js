import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  getDoc,
  getDocs,
  orderBy,
  limit,
  where,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1CnrIALwWHoRfS4mJQrPDuOWsC90lR3Q",
  authDomain: "ios-planner-709b1.firebaseapp.com",
  projectId: "ios-planner-709b1",
  storageBucket: "ios-planner-709b1.appspot.com",
  messagingSenderId: "556738130951",
  appId: "1:556738130951:web:3e1efb8edab2ab9b69e6a2",
}

initializeApp(firebaseConfig)
const db = getFirestore()

const createDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await setDoc(ref, documentData)
  return result
}

const generateId = path => doc(collection(db, path)).id

const updateDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await updateDoc(ref, documentData)
  return result
}

const getDocument = async (collectionPath, id) => {
  const ref = doc(db, collectionPath, id)
  const docSnapshot = await getDoc(ref)
  return docSnapshot.data()
}

const queryDocuments = async (
  collectionPath,
  queries,
  orderByRule,
  limitRule
) => {
  const ref = collection(db, collectionPath)
  const queriesExtended = queries && queries.map(q => where(...q))
  orderByRule && queriesExtended.push(orderBy(...orderByRule))
  limitRule && queriesExtended.push(limit(limitRule))
  const q = queriesExtended ? query(ref, ...queriesExtended) : query(ref)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach(doc => {
    result.push(doc.data())
  })
  return result
}

const getTimestamp = () => serverTimestamp()

const getId = collectionPath => {
  const ref = doc(collection(db, collectionPath))
  return ref.id
}

const deleteDocument = async (collectionPath, id) => {
  const result = await deleteDoc(doc(db, collectionPath, id))
  return result
}

const firestoreService = {
  createDocument,
  generateId,
  updateDocument,
  getDocument,
  queryDocuments,
  deleteDocument,
  getTimestamp,
  getId,
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  getDoc,
  getDocs,
  orderBy,
  limit,
  where,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  db
}

export default firestoreService
