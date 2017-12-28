const todos = (state = [], action) => {     //state is an array now, initial is null
    switch (action.type) {
      case 'ADD_TODO':          //The new todos is equal to the old todos concatenated with a single new item at the end
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todos