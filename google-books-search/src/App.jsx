import React from 'react';
import './App.css';
import {InputGroup, Input, InputGroupAddon} from 'reactstrap';

function App() {
  const mainHeader = () => {
    return (
      <div className= 'main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1 className='display-2 text-center text-white mb-3' style={{zIndex:2}}>
          Google Books
        </h1>
        <div style={ { width: '60%', zIndex: 2 } }>
          <InputGroup size='lg' className='mb-3'>
            <Input placeholder='Book Search'/>
            <InputGroupAddon addonType='append'>
              <button color='secondary'>
                <i className='fas fa-search'></i>
              </button>  
            </InputGroupAddon>
          </InputGroup>
          
        </div>
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
