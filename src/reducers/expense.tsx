import { ExpenseInterface } from "../interfaces/expense.interface";

// define initial state on each reducer rather than in root.
const initialState: {
   lastExpense: ExpenseInterface,
   totalExpense: number
}= {
   lastExpense: {
      value: 0,
      note: ''
  },
  totalExpense: 0,
}

// a reducer is just a switch statement that handles each action we define.
// a reducer returns the new state, which in turn updates the Store.


export const expense = (state = initialState, action: {type: string; payload: any }) => { 
   // I don't know how you would handle types on the payload since a reducer should receive multiple actions with different payloads. any seems to work :)
    switch (action.type) {
       case 'ADD_EXPENSE':
         return {
            ...state, // unnecessary in this case since overwriting all properties
            totalExpense: state.totalExpense + action.payload.value, // new state calculation moved from action to reducer.
            lastExpense: action.payload,
         }
       default:
         return state;
    }
};
