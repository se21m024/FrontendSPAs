import React, { useState } from "react";
import './App.css';
import './web-components/autoCompleteTextInput.js'
import countries from "./ressources/countries.json";

function App() {
  // Use hook to manage state
  const [currentInput, setCurrentInput] = useState('default');

  function onInputUpdate(e) {
    console.log('React app: received event from web component: ' + e.detail.message);
    setCurrentInput(e.detail.message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>React App</h1>
          <p>This React app includes an auto-complete text input web component.</p>
          <p>Student: se21m024 @Technikum Wien</p>
          <br/>
          <div>
              <my-auto-complete-text-input id="auto-complete-ti"
                                          title="Country Search:"
                                          suggestions={JSON.stringify(countries)}
                                          current-input-value={onInputUpdate}>
              </my-auto-complete-text-input>
          </div>
          <p>Currently selected country:</p>
          <p>{currentInput}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
