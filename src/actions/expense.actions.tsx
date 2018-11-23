import { ExpenseInterface } from "../interfaces/expense.interface";

export const addExpense = (current: number, expense: ExpenseInterface) => {
    const totalExpense = current + Number(expense.value)
    return (
        {
        type: 'ADD_EXPENSE',
        load: {
            totalExpense,
            expense
        }
    )
};