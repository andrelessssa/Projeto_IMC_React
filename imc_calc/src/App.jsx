import { data } from '/src/data/data.js';
import { useState } from 'react';

import ImcCalc from './components/ImcCalc';
import ImcTable from './components/ImcTable';

import './App.css'

function App() {
  const calcImc = (e, height, weight) =>{
    e.preventDefault();
    
    if(!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const impResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

   setImc(impResult);

   data.forEach((item) => {
    if (impResult >= item.min && impResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
    }
});
   if (!info) return;

  

  };
  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return  <div className='container'> {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/> }</div>
   
  
}

export default App; 
