import { ExpenseInterface } from "./expense.interface";

export interface CalculatorProps {
    lastExpense: ExpenseInterface;
    totalExpense: number;
    addExpense: (expense: ExpenseInterface) => {
        type: string;
        payload: ExpenseInterface;
    };
}
