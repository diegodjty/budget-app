import React,{Fragment, useState} from 'react'
import Error from './Error';

const Question = ({handelRemaining,handelBudget,handelShowQuestion}) => {

    //Define state
    const [quantity, handelQuantity] = useState(0);
    const [error, handelError] = useState(false);

    //function that reads budget
    const setBudget = e => {
        handelQuantity(parseInt(e.target.value, 10))
    }

    // Submit to define budget
    const addBudget = e => {
        e.preventDefault();

        // Validate
        if(quantity < 1 || isNaN(quantity)){
            handelError(true);
            return;
        }

        // If validation pass
        handelError(false);
        handelBudget(quantity)
        handelRemaining(quantity);
        handelShowQuestion(false);  
    }

    return (
        <Fragment>
            <h2>Set your Budget</h2>
            { error ? <Error message="The budget is incorrect" /> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Set your budget"
                    onChange={setBudget}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define your budget"

                />
            </form>
        </Fragment>
    )
}

export default Question
