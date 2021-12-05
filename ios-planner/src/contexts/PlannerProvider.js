import {useReducer} from "react"
import PlannerContext from "./PlannerContext";
import reducer from "./reducer";
const PlannerProvider = ({children})=>{
    return(
        <PlannerContext.Provider>
            {children}
        </PlannerContext.Provider>
    )
}

export default PlannerProvider