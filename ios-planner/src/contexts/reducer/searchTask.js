
const searchTask = (state, payload) => {
    const newState = JSON.parse(JSON.stringify(state))
    let searchTask = []
    newState.categories.map(item =>
      item.tasksList.map(task => searchTask.push(task))
    )

   const searchedItems = searchTask.filter(item=>{
       return item.taskName.match(payload.value)
   })
   newState.currentCategory.categoryName = `Results of search "${payload.value}"`
   newState.currentCategory.categoryId = "searchInput"
   newState.currentCategory.tasksList = searchedItems
   console.log(newState)
  console.log("SearchedItems", searchedItems)
    return { ...newState }
}

export default searchTask
