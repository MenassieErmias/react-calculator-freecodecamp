import { useState } from "react";
function App() {
  // STATES
  const [display, setDisplay] = useState("0");

  // FUNCTIONS
  const onDigitPress = (event) => {
    if (display == "0") {
      setDisplay(event.target.value)
    } else {
      setDisplay(prev => prev + event.target.value)
    }
  }

  const onEqualsPress = () => {
    setDisplay(prev => eval(prev))
  }

  const onBackspacePress = () => {
    setDisplay(prev => prev.slice(0, -1))
  }

  const onClearPress = () => {
    setDisplay("0")
  }
  return (
    <div className="calculator">
      <div className="display">
        {display}
      </div>
      <div className="inputs">
        <div className="digits">
          <button id='nine' value='9' onClick={onDigitPress}>9</button>
          <button id='eight' value='8' onClick={onDigitPress}>8</button>
          <button id='seven' value='7' onClick={onDigitPress}>7</button>
          <button id='six' value='6' onClick={onDigitPress}>6</button>
          <button id='five' value='5' onClick={onDigitPress}>5</button>
          <button id='four' value='4' onClick={onDigitPress}>4</button>
          <button id='three' value='3' onClick={onDigitPress}>3</button>
          <button id='two' value='2' onClick={onDigitPress}>2</button>
          <button id='one' value='1' onClick={onDigitPress}>1</button>
          <button id='zero' value='0' onClick={onDigitPress}>0</button>
          <button id='decimal' value='.' onClick={onDigitPress}>.</button>
        </div>
        <div className="operations">
          <button id='add' value='+' onClick={onDigitPress}>+</button>
          <button id='subtract' value='-' onClick={onDigitPress}>-</button>
          <button id='multiply' value='*' onClick={onDigitPress}>*</button>
          <button id='divide' value='/' onClick={onDigitPress}>/</button>
        </div>
        <div className="action">
          <button id='equals' onClick={onEqualsPress}>=</button>
          <button id='clear' onClick={onClearPress}>CE</button>
          <button id='backspace' onClick={onBackspacePress}>&#x2190;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
