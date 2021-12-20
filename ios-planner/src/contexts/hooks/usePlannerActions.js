const usePlannerActions = () => {
  const switchComponent = (fn, value) => {
    fn(!value)
  }

  const hideComponent = fn => {
    fn(false)
  }

  const showComponent = fn => {
    fn(true)
  }

  return { switchComponent, hideComponent, showComponent }
}

export default usePlannerActions
