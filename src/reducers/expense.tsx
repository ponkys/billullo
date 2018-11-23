import { ExpenseInterface } from "../interfaces/expense.interface";

// a reducer is just a switch statement that handles each action we define.
// a reducer returns the new state, which in turn updates the Store.
export const expense = (state = {}, action: {type: string; load: {
   totalExpense: number;
   expense: ExpenseInterface;
};) => {
    switch (action.type) {
       case 'ADD_EXPENSE':

         return Object.assign(
            {},
            state,
            {
               expense: action.load,
            }
         );
       default:
         return state;
    }
};
