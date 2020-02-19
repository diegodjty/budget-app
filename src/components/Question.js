import React,{Fragment} from 'react'


const Question = () => {
    return (
        <Fragment>
            <h2>Set your Budget</h2>

            <form action="">
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Set your budget"
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
