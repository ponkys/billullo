import { ExpenseInterface } from "../interfaces/expense.interface";

export const addExpense = (expense: ExpenseInterface) => {
    // the calculation to the reducer
    return {
            type: 'ADD_EXPENSE',
            payload: expense, 
        }
}

export const updateExpense = (value: number) => {
    return {
            type: 'UPDATE_EXPENSE',
            payload: value, 
        }
}
