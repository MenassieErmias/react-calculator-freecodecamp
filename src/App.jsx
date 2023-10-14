import { useState } from "react";
function App() {
  const [display, setDisplay] = useState("0");

  return (
    <div className="calculator">
      <div className="display">
        {display}
      </div>
      <div className="inputs">
        <div className="digits">
          <button id='nine'>9</button>
          <button id='eight'>8</button>
          <button id='seven'>7</button>
          <button id='six'>6</button>
          <button id='five'>5</button>
          <button id='four'>4</button>
          <button id='three'>3</button>
          <button id='two'>2</button>
          <button id='one'>1</button>
          <button id='zero'>0</button>
        </div>
        <div className="operations">
          <button id='add'>+</button>
          <button id='subtract'>-</button>
          <button id='multiply'>*</button>
          <button id='divide'>/</button>
        </div>
        <div className="action">
          <button id='equals'>=</button>
          <button id='clear'>CE</button>
          <button id='backspace'>&#x2190;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
