import { ExpenseInterface } from "../interfaces/expense.interface";

export const addExpense = (expense: ExpenseInterface) => {
    return {
        type: 'ADD_EXPENSE',
        payload: expense, 
    }
}

