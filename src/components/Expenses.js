import React from 'react'

const Expenses = ({expenses}) => {
    return (
        <li className='gastos'>
            <p>
                {expenses.name}
                <span className='gasto'>$ {expenses.quantity}</span>
            </p>
        </li>
    )
}

export default Expenses
