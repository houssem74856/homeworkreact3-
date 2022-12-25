import { createSlice } from '@reduxjs/toolkit'

function next(hala) {
    if(hala==="todo") return "currently"
    return "completed"
  }

  function previous(hala) {
    if(hala==="completed") return "currently"
    return "todo"
  }

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos :[
        {
          title: "Task Title 01",
          description: "As a user ,I can preform multiple task on the platform,Log in , Sign in , submit a new work ,and complete a task!",
          tag: "work",
          date: "28/08/2020",
          hala: "todo",
          id: '1'
        },
        {
          title: "Task Title 02",
          description: "As a user ,I can preform multiple task on the platform,Log in , Sign in , submit a new work ,and complete a task!",
          tag: "hobby",
          date: "28/08/2020",
          hala: "todo",
          id: '2'
        },
        {
          title: "Task Title 03",
          description: "As a user ,I can preform multiple task on the platform,Log in , Sign in , submit a new work ,and complete a task!",
          tag: "study",
          date: "28/08/2020",
          hala: "currently",
          id: '3'
        },
        {
          title: "Task Title 04",
          description: "As a user ,I can preform multiple task on the platform,Log in , Sign in , submit a new work ,and complete a task!",
          tag: "hobby",
          date: "28/08/2020",
          hala: "currently",
          id: '4'
        },
        {
          title: "Task Title 05",
          description: "As a user ,I can preform multiple task on the platform,Log in , Sign in , submit a new work ,and complete a task!",
          tag: "hobby",
          date: "28/08/2020",
          hala: "completed",
          id: '5'
        },
        {
          title: "Task Title 06",
          description: "As a user ,I can preform multiple task on the platform,Log in , Sign in , submit a new work ,and complete a task!",
          tag: "hobby",
          date: "28/08/2020",
          hala: "completed",
          id: '6'
        }
      ]
  },
  reducers: {
    addTodo: (state,action) => {
        state.todos.push(action.payload.todo)
    },
    nextt : (state,action) => {
        state.todos.map(todo => {
            if(todo.id === action.payload.id) todo.hala = next(todo.hala)        
        })
    },
    previouss : (state,action) => {
        state.todos.map(todo => {
            if(todo.id === action.payload.id) todo.hala = previous(todo.hala)        
        })
    },
  },
})

export const { addTodo,nextt,previouss } = todosSlice.actions

export default todosSlice.reducer