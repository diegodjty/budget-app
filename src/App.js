import React,{useState,useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';


function App() {

  // Define state
  const [budget, handelBudget] = useState(parseInt(localStorage.getItem('budget')));
  const [remaining, handelRemaining] = useState(localStorage.getItem('remainingBudget'))
  const [showQuestion, handelShowQuestion] = useState(localStorage.getItem('question')?false:true);
  const [expenses, handelExpenses] = useState(localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]);
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

      localStorage.setItem('budget',JSON.stringify(budget))
      localStorage.setItem('remainingBudget',JSON.stringify(remainingBudget))
      localStorage.setItem('question',showQuestion);
      
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
              localStorage={localStorage.getItem('budget')}
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
