import React,{Fragment, useState} from 'react'


const Question = () => {

    //Define state
    const [quantity, handelQuantity] = useState(0);

    //function that reads budget
    const setBudget = e => {
        handelQuantity(parseInt(e.target.value, 10))
    }

    // Submit to define budget
    const addBudget = e => {
        e.preventDefault();

        // Validate

        // If validation pass
    }

    return (
        <Fragment>
            <h2>Set your Budget</h2>

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
