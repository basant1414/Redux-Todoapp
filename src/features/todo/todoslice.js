import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Todo list here" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),

        text: action.payload,
      };
      state.todos.push(todo); // access the object from initial state and push the new todo
    },


    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      //filter will select the given id and the id should not match with id at action.payload
      //id match vaye remove hunxa nahune jati display hunxan
    },


    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },


    updateTodo:(state, action) =>{
      const {id, newText} = action.payload; // action.payload will be object with id and newtext
      const  todo = state.todos.find((t)=>t.id ===id);//Looks throught todos array for the todo that matches given id
      if (todo){  //checks if todo exixts
        todo.text = newText; // updates the text
      }
    }
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;
//while performin export ,every functionality should be included
export default todoSlice.reducer;
//store need to be aware of the reducer
