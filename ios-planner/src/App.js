import React, { useEffect, useState } from "react"
import Navigator from "./pages/Navigator"
import "./styles/style.css"
import { PlannerProvider } from "./contexts"
import firestoreService from "./services/firebase/firestoreMethods"
import { async } from "@firebase/util"
// Провайдер->Навігатор->Компонента

function App() {
  // const querySnapshot = await firestoreService.getDocs(collection(db, "users"))
  // querySnapshot.forEach(doc => {
  //   console.log(`${doc.id} => ${doc.data()}`)
  // })
  const [dbCategory, setDBCategory] = useState([])
  const [dbTask, setDBTask] = useState([])
  useEffect(()=>{
    const getData = async () => {
      const categories = await  firestoreService.queryDocuments("category")
      const tasks = await  firestoreService.queryDocuments("task")
      setDBCategory(categories)
      setDBTask(tasks)
    }
    getData()
      
  }, [])
  console.log(dbCategory)
  console.log(dbTask)
  return (
    <PlannerProvider>
      <Navigator />
    </PlannerProvider>
  )
}

export default App
