//if all reducer are in this file

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions/index';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters

//initialState is just the initial state of the store
// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// }

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// reducer composition
function todos(state = [], action) {    //state is an array now
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
// function todoApp(state = initialState, action) {    //use the ES6 default arguments syntax
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             })
//         case ADD_TODO:                  //The new todos is equal to the old todos concatenated with a single new item at the end
//             return Object.assign({}, state, {
//                 todos: tObject.assign({}, state, {
//                     todos: (state.todos, action)
//                 })
//             })
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: (state.todos, action)
//             })
//         default:
//             return state
//     }
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp