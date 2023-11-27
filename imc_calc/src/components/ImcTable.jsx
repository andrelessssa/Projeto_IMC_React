import { data } from "../data/data"

const ImcTable = ({ data }) => {
  return <div id="result-container">
    <p id="imc-number">
      seu Imc:
    </p>
    <p id="imc-info">
      Sitiação atual:
    </p>
    <h3>Confira as Classificações:</h3>
    <div id="imc-table">
      <div className="table-header">
        <h4>IMC</h4>
        <h4>Classificação</h4>
        <h4>Obesidade</h4>
      </div>
      {data.map((item) => (
        <div className="table-data" key={item.info}>
          <p>{item.classification}</p>
          <p>{item.info}</p>
          <p>{item.obesity}</p>
        </div>
      ))}

    </div>
  </div>
}

export default ImcTable;