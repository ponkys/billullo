export function assignValue(expense: string, content: string): string {
    const specialCharacter = ['delete'];
    const isDelete = specialCharacter.includes(content);
    if (isDelete) {
        return expense.substring(0, expense.length - 1);
    }
    // if expense is 0 reset and next value is not '.'
    // reset to empty string
    if (expense === '0' && content !== '.') {
        expense = '';
    }
    if (expense === '.') {
        expense = '0.';
    }
    expense = expense + content;
    return expense;
}