import React, { useState, useRef, useEffect } from "react";
import './App.css';
import './web-components/autoCompleteTextInput.js'
import countries from "./ressources/countries.json";

function App() {
  const appRef = useRef(null);
  const [currentInput, setCurrentInput] = useState('default');

  function onInputUpdate(e) {
    console.log('React app: received event from web component: ' + e.detail.message);
    setCurrentInput(e.detail.message);
  }

  useEffect(() => {
    const handleInputUpdateEvent = (event) => {
      if (appRef.current && !appRef.current.contains(event.target)) {
        onInputUpdate(event)
      }
    }

    document.addEventListener("current-input-value", handleInputUpdateEvent)
    return () => document.removeEventListener("current-input-value", handleInputUpdateEvent)
  }, [appRef])

  return (
    <div ref={appRef} className="App">
      <header className="App-header">
        <div>
          <h1>React App</h1>
          <p>This React app includes an auto-complete text input web component.</p>
          <p>Student: se21m024 @Technikum Wien</p>
          <br/>
          <div>
              <my-auto-complete-text-input id="auto-complete-ti"
                                          title="Country Search:"
                                          suggestions={JSON.stringify(countries)}>
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
