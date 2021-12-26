import { useReducer, useState, useEffect } from "react"
import PlannerContext from "./PlannerContext"
import reducer from "./reducer"
import firestoreService from "../services/firebase/firestoreMethods"

const PlannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentCategory: [],
    categories: [],
  })
  const [categoryName, setCategoryName] = useState()
  const [taskName, setTaskName] = useState("")
  const [taskNotes, setTaskNotes] = useState("")
  const [showtsf, setShowTSF] = useState(false)
  const [showcsf, setShowCSF] = useState(false)
  const [deletedTaskId, setDeletedTaskId] = useState()
  const [dbCategory, setDBCategory] = useState([])
  const [dbTask, setDBTask] = useState([])
  // const fetchDocuments = useFetchDocuments(dispatch)

  useEffect(() => {
    
    const getData = async () => {
      const categories = await firestoreService.queryDocuments("category")
      const tasks = await firestoreService.queryDocuments("task")
      
      setDBCategory(categories)
      setDBTask(tasks)
      dispatch({type:"updateData", payload: categories})
      
      // fetchDocuments("category")
    }
    getData()
    
  }, [])
  console.log("dbCategory->", dbCategory)
  console.log("dbTask->", dbTask)
  console.log("state->", state)

  return (
    <PlannerContext.Provider
      value={{
        state,
        dispatch,
        categoryName,
        setCategoryName,
        showtsf,
        setShowTSF,
        taskName,
        setTaskName,
        taskNotes,
        setTaskNotes,
        showcsf,
        setShowCSF,
        deletedTaskId,
        setDeletedTaskId,
        dbCategory,
        setDBCategory,
        dbTask,
        setDBTask,
      }}>
      {children}
    </PlannerContext.Provider>
  )
}

export default PlannerProvider
