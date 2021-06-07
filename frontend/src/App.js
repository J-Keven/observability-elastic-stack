import { useState, useEffect } from "react"
import axios from "axios"
import logo from './logo.svg';
import './App.css';

function App() {
  const [debits, setDebits] = useState([])
  const [debit, setDebit] = useState()

  useEffect(() => {
    axios.get("http://localhost/debits").then(response => {
      setDebits(response.data)
    })
  })

  const createNewDebit = (e) => {
    e.prevetDefault()
    axios.post("http://localhost/debits", {
      debit
    })
  }
  return (
    <div className="App">
      <div>
        <h2>Meus debitos</h2>
        <ul>
          {
            debits.map(debit => {
              return (
                <li>
                  {debit}
                </li>
              )
            })

          }
        </ul>
      </div>
      <div>
        <input type="text" onChange={e => setDebit(e.target.value)} />
        <button onClick={createNewDebit}>Adiocinar novo debito</button>
      </div>
    </div>
  );
}

export default App;
