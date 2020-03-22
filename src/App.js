import React,{useState,useEffect} from 'react';
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
  const [expense, handelExpense] = useState({});
  const [createExpense, handelCreateExpense] = useState(false);

  // useEffect that updates remainging

  useEffect(()=>{
    if(createExpense){  

      // add new budget

      handelExpenses([
        ...expenses,
        expense
      ]) 

      // substract from budget
      const remainingBudget = remaining - expense.quantity;
      handelRemaining(remainingBudget);
    }
    handelCreateExpense(false)
     },[expense, createExpense, expenses, remaining])
    
  

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
                  handelExpense={handelExpense}
                  handelCreateExpense={handelCreateExpense}
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
