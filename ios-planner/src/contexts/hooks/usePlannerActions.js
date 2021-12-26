const usePlannerActions = (dispatch) => {
  const switchComponent = (fn, value) => {
    fn(!value)
  }

  const hideComponent = fn => {
    fn(false)
  }

  const showComponent = fn => {
    fn(true)
  }

  const searchTask=(value)=>{
    dispatch({type:"searchTask", payload:{value}})
  }

  return { switchComponent, hideComponent, showComponent, searchTask }
}

export default usePlannerActions
