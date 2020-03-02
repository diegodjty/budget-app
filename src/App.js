import React,{useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';


function App() {

  // Define state
  const [budget, handelBudget] = useState(0);
  const [remaining, handelRemaining] = useState(0)
  const [showQuestion, handelShowQuestion] = useState(true);
  const [expenses, handelExpenses] = useState([]);

  // when a  new expense is added
  const addNewExpense = expense =>{
    handelExpenses([
      ...expenses,
      expense
    ])  
  }

  return (
    <div className="container">
      <header>
        <h1>Weekly expenses</h1>
        <div className="contenido-principal contenido">
          { showQuestion ? (
            <Question
              handelBudget={handelBudget}
             handelRemaining={handelRemaining}
              handelShowQuestion={handelShowQuestion}
           />
          ):(
            <div className="row">
              <div className="one-half column">
                <Form
                  addNewExpense={addNewExpense}
                />
              </div>
              <div className="one-half column">
                <List 
                  expenses={expenses}
                />
                <BudgetControl
                  budget={budget}
                  remaining={remaining}
                />
              </div>

           </div>
          )
          
          }
          
          

        </div>
      </header>
    </div>
  );
}

export default App;
