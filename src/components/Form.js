import React,{useState} from 'react';

const Form = () => {
    return ( 
        <form>
            <h2>Add Your Expenses</h2>

            <div className="campo">
                <label>Name of Expense</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Eg. Transportation"
                />
            </div>

            <div className="campo">
                <label>Amount of Expense</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Eg. 200"
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