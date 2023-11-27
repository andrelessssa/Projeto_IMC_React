import { useState } from 'react';
import { data } from "./data/data"
import ImcCalc from './components/ImcCalc';

import './App.css'
import ImcTable from './components/ImcTable';

function App() {
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass] = useState("")
  return (
    <div className='container'>
      {
        !imc ? (
          <ImcCalc/>
        ) : (
          <ImcTable/>
        )
      }
    </div>
  );
}

export default App; 
