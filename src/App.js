import React,{useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';


function App() {

  // Define state
  const [budget, handelBudget] = useState(0);
  const [remaining, handelRemaining] = useState(0)
  const [showQuestion, handelShowQuestion] = useState(true);

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
                
                />
              </div>
              <div className="one-half column">
                2
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
