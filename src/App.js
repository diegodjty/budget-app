import React,{useState} from 'react';
import Question from './components/Question';


function App() {

  // Define state
  const [budget, handelBudget] = useState(0);
  const [remaining, handelRemaining] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Weekly expenses</h1>
        <div className="contenido-principal contenido">
          <Question
            handelBudget={handelBudget}
            handelRemaining={handelRemaining}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
