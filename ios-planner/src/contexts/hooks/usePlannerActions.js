const usePlannerActions = () => {
  const switchComponent = (fn, value) => {
    fn(!value)
  }

  const hideComponent = fn => {
    fn(false)
  }

  return { switchComponent, hideComponent }
}

export default usePlannerActions
