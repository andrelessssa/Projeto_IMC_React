
import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="heigt" >Altura: </label>
                    <input type="text" name="height" id="height" placeholder="Exemplo 1,75" 
                    onChange={(e) => setHeight(e.target.value)} value={height} />

                </div>
            </div>
            <div className="form-control">
                    <label htmlFor="weight" >Peso: </label>
                    <input type="text" name="weigtht" id="weight" placeholder="Exemplo 75,5" 
                    onChange={(e) => setWeight(e.target.value)} value={weight} />
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular"/>
                    <Button id="clear-btn" text="Limpar" action={clearForm}/>
                    
                </div>

        </form>

    </div>
  )
}

export default ImcCalc;