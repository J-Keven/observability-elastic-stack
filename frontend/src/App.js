import { useState, useEffect } from "react"
import axios from "axios"
import logo from './logo.svg';
import './App.css';
import { init as initApm } from '@elastic/apm-rum'


function App() {
  const [debits, setDebits] = useState([])
  const [debit, setDebit] = useState()

  const apm = initApm({
    breakdownMetricsedit: true,
    // pageLoadTraceId: apm.trace_id,
    // pageLoadSpanId: apm.trace_id,
    propagateTracestateedit: true,
    pageLoadSampled: true,
    distributedTracingOrigins: ["http://localhost:8080"],
    serviceName: "codeprogress-rum",
    serverUrl: "",
  })

  useEffect(() => {
    apm.startTransaction("api-service")
    axios.get("http://localhost:8080/debits").then(response => {
      setDebits(response.data)
      console.log()
    })
  }, [])

  const createNewDebit = async (e) => {
    // e.prevetDefault()
    await axios.post("http://localhost:8080/debits", {
      debit
    })
    setDebit('')
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
        <input type="text" value={debit} onChange={e => setDebit(e.target.value)} />
        <button onClick={createNewDebit}>Adiocinar novo debito</button>
      </div>
    </div>
  );
}

export default App;
