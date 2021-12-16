const usePlannerActions = () => {

  const switchComponent = (fn, value) => {
    console.log("switchComponents Fn")
    fn(!value)
  }

  const hideComponent = (fn) => {
    console.log("hideComponents Fn")
    fn(false)
  }

  return { switchComponent, hideComponent }
}

export default usePlannerActions
