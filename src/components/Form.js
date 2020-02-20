import React,{useState} from 'react';

const Form = () => {

    const [name, handelName] = useState('');
    const [quantity, handelQuantity] = useState(0);


    // When user adds an expense
    const addExpense = e => {
        e.preventDefault();

        // Validate

        // Build the expense

        // Pass the expense to the main component

        // Reset form        
    }
    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add Your Expenses</h2>

            <div className="campo">
                <label>Name of Expense</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Eg. Transportation"
                    value={name}
                    onChange={e => handelName(e.target.value)}
                />
            </div>  

            <div className="campo">
                <label>Amount of Expense</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Eg. 200"
                    value={quantity}
                    onChange={e => handelQuantity(parseInt(e.target.value,10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense" 
            />
        </form>
     );
}
 
export default Form;