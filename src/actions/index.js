// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })

// export const starsTodo = id => ({
//   type: 'STARS_TODO',
//   id
// })

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

export const addCard = (id, image) => ({
    type: 'ADD_CARD',
    id,
    image
})

export const toggleCard = id => ({
    type: 'TOGGLE_CARD',
    id
})