import { ExpenseInterface } from "./expense.interface";

export interface CalculatorState {
    expense: ExpenseInterface,
    totalExpense: number
    updateExpense: any,
    addExpense: any
}
