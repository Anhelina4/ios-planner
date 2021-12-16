
const usePlannerActions = () => {
  const showComponent = (fn, value) => {
    console.log("worked")
    fn(!value)
  }
  return { showComponent }
}

export default usePlannerActions
