import React, { useState } from 'react';
import leaf from './images/leaf1.png';
import candle from './images/candle_transparent.png';
import { generateScent } from './scentgen/scentutil';
import { FloatingBackground } from './floatingbackground';
import './App.css';
import { appModes } from './types'


function App() {

  const [mode, setMode] = useState(appModes.wait);
  const [currentScent, setCurrentScent] = useState("");

  function showScent() {
    setMode(appModes.generate);
    setCurrentScent(generateScent());
  }

  function hideScent() {
    setMode(appModes.wait);
  }

  const leafButtonClass = mode === appModes.wait 
      ? "centeredLeaf zoomInDown"
      : "centeredLeaf zoomOutUp"

  if (mode === appModes.generate) {
    return (
      <div className="App">
        <FloatingBackground mode={mode}></FloatingBackground>
        <div className="centeredCandle" onClick={hideScent}>
          <img className="candleImage" src={candle}></img>
          <span className="scentText">{currentScent}</span>
        </div>
        <div className={leafButtonClass} >
          <img className="leafImage" onClick={showScent} src={leaf}/>
          <span className="createText">Create</span>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <FloatingBackground mode={mode}></FloatingBackground>
        <div className={leafButtonClass} >
          <img className="leafImage" onClick={showScent} src={leaf}/>
          <span className="createText">Create</span>
        </div>
      </div>
    );
  }


}

export default App;
