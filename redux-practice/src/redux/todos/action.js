import { ADDED, CLEAR_COMPLETED, COLOR_CHANGED, COMPLETED, DELETED, TOGGLED } from "./actionTypes"

export const added = (todoText) =>{
   return{
    type: ADDED,
    payload: todoText,
   }
};

export const toggled = (todoID) =>{
   return{
    type: TOGGLED,
    payload: todoID,
   }
};

export const completed = () =>{
   return{
    type: COMPLETED,
   }
};

export const coloChanged = (todoID, color) =>{
   return{
    type: COLOR_CHANGED,
    payload:{
        todoID,
        color
    }
   }
};

export const deleted = (todoID) =>{
   return{
    type: DELETED,
    payload:todoID,
   }
};

export const clearCompleted = (todoID) =>{
   return{
    type: CLEAR_COMPLETED,
   }
};