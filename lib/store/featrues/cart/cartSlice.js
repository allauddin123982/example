import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  todos: [], 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    fetchTodos: () => {
      state.todos.push(action.payload)
    }

  },
});

export const { add,fetchTodos } = cartSlice.actions;

export default cartSlice.reducer;
