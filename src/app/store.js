import { configureStore } from "@reduxjs/toolkit";

import  todoReducer from "../features/todo/todoslice";
//variable stored ,keeping object in it
export const store = configureStore({reducer:{
    todo: todoReducer}})