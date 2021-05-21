import React from 'react';
import './App.css';

function App() {
  const mainHeader = () => {
    return (
      <div className= 'main-image d-flex justify-content-center align-item-center flex-column'>
        {/* Overlay */}
        <div className="filter"></div>
      </div>
    )
  }
  return (
    <div>
      {mainHeader()}
    </div>
  );
}

export default App;
