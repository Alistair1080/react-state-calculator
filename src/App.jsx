import "./App.css"
import { useState } from "react"

function App() {
  const [first, firstChange] = useState(0)
  const [second, secondChange] = useState(0)
  const [total, totalChange] = useState(0)
  const [operator, updateOperator] = useState("+")

  function calOneNumberClick (event) {
    console.log(event.target.value)
    firstChange(event.target.value)
  }

  function calTwoNumberClick (event) {
    console.log(event.target.value)
    secondChange(event.target.value)
  }

  function opClick (event) {
    updateOperator(event.target.value)
  }

  function onTotalClick () {
    if (operator === "+") {
      totalChange(Number(first) + Number(second))
    }
    else if (operator === "-") {
      totalChange(Number(first) - Number(second))
    }
    else if (operator === "*") {
      totalChange(Number(first) * Number(second))
    }
    else if (operator === "÷") {
      totalChange(Number(first) / Number(second))
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          <button value={1} onClick={calOneNumberClick}>1</button>
          <button value={2} onClick={calOneNumberClick}>2</button>
          <button value={3} onClick={calOneNumberClick}>3</button>
          <button value={4} onClick={calOneNumberClick}>4</button>
          <button value={5} onClick={calOneNumberClick}>5</button>
          <button value={6} onClick={calOneNumberClick}>6</button>
          <button value={7} onClick={calOneNumberClick}>7</button>
          <button value={8} onClick={calOneNumberClick}>8</button>
          <button value={9} onClick={calOneNumberClick}>9</button>
          <button value={0} onClick={calOneNumberClick}>0</button>
          <button value={0} onClick={calOneNumberClick}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button value="+" onClick={opClick}>+</button>
          <button value="-" onClick={opClick}>-</button>
          <button value="*" onClick={opClick}>*</button>
          <button value="÷" onClick={opClick}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{second}</p>
        <div className="numbers">
          <button value={1} onClick={calTwoNumberClick}>1</button>
          <button value={2} onClick={calTwoNumberClick}>2</button>
          <button value={3} onClick={calTwoNumberClick}>3</button>
          <button value={4} onClick={calTwoNumberClick}>4</button>
          <button value={5} onClick={calTwoNumberClick}>5</button>
          <button value={6} onClick={calTwoNumberClick}>6</button>
          <button value={7} onClick={calTwoNumberClick}>7</button>
          <button value={8} onClick={calTwoNumberClick}>8</button>
          <button value={9} onClick={calTwoNumberClick}>9</button>
          <button value={0} onClick={calTwoNumberClick}>0</button>
          <button value={0} onClick={calTwoNumberClick}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={onTotalClick}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
