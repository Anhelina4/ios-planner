import React from "react"

const updateData = (state, payload) => {
  console.log(payload)
  const newState = { ...state, categories: payload }
  console.log(newState)
  return newState
}

export default updateData
