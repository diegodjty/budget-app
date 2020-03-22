import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid'

const Form = ({handelExpense,handelCreateExpense}) => {

    const [name, handelName] = useState('');
    const [quantity, handelQuantity] = useState(0);
    const [error, handelError] = useState(false);



    const clearStorage = ()=> {
        localStorage.clear();
        window.location.reload();
    }
    // When user adds an expense
    const addExpense = e => {
        e.preventDefault();

        // Validate
        if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
            handelError(true);
            return;
        }
            handelError(false);
        // Build the expense
        const expenses = {
            name,
            quantity,
            id: shortid.generate()
        }
        // Pass the expense to the main component
        handelExpense(expenses)
        handelCreateExpense(true)
        // Reset form
        handelName('')
        handelQuantity(0)
    }
    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add Your Expenses</h2>

            { error ? <Error message="Both fields are required or quantity is wrong" /> : null}

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
            <input 
                type="button"
                onClick={clearStorage}
                className="u-full-width"
                value="New Budget"
                id="new-budget" 
            />
        </form>
     );
}
 
export default Form;