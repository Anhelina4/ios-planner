import React from 'react'

export const filterChecked = (state, payload) => {
    const newState = JSON.parse(JSON.stringify(state))
    let filteredChecked = []
    // newState.currentCategory.map(item =>
    //   item.tasksList.map(task => (!task.status ? filteredChecked.push(task) : null))
    // )
    newState.currentCategory.tasksList.map(item=>{
        return !item.status ? filteredChecked.push(item) : null
    })

    console.log("filteredChecked", filteredChecked)

    newState.currentCategory.categoryName = payload.categoryName
    newState.currentCategory.categoryId = payload.categoryId
    newState.currentCategory.tasksList = filteredChecked
    return { ...newState }
}
