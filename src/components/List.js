import React from 'react'
import Expenses from './Expenses';

const List = ({expenses}) => {
    return (
        <div className="gastos-realizados">
            <h2>List</h2>
            {expenses.map( expense => (
                <Expenses 
                    key={expense.id}
                    expenses={expense}
                />
            ))}
        </div>
    )
}

export default List
