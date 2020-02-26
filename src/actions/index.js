export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = (num2) => {
  return {
    type: 'DECREMENT',
    payload: num2
  }
}