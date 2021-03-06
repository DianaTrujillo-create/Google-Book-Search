import React, {useState} from 'react';
import './App.css';
import {
  InputGroup, 
  Input, 
  InputGroupAddon, 
  Button, 
  FormGroup,
  Label
} from 'reactstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function App() {
  //States
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true);
    if(maxResults > 40 || maxResults < 1) {
      toast.error('max results must be between 1 and 40');
    } else {
      axios
      .get(
      // eslint-disable-next-line no-template-curly-in-string
      'https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}'
      )
      .then(res => {
        if (startIndex >= res.data.totalItems || startIndex < 1) {
          toast.error(
            // eslint-disable-next-line no-template-curly-in-string
            'max results must be between 1 and ${res.data.totalItems}'
          );
        } 
        console.log(res.data);
      }).catch(err => {
        console.log(err)
      });
    }
  };
  const mainHeader = () => {
    return (
      <div className= 'main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1 className='display-2 text-center text-white mb-3' style={{zIndex:2}}>
          Google Books
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <Input placeholder='Book Search' 
            value={query} 
            onChange={e=> setQuery(e.target.value)}
            />
            <InputGroupAddon addonType='append'>
              <Button color='secondary' onClick={handleSubmit}>
                <i className='fas fa-search'></i>
              </Button>  
            </InputGroupAddon>
          </InputGroup>
          <div className="d-flex text-white justify-content-center">
            <FormGroup className='ml-5'>
              <Label for='maxResults'>Max Results</Label>
              <Input 
              type='number' 
              id='maxResults' 
              placeholder='Max Results'
              value={maxResults} 
              onChange={e=> setMaxResults(e.target.value)}
              />
            </FormGroup>
            <FormGroup className='ml-5'>
              <Label for='startIndex'>Start Index</Label>
              <Input 
              type='number' 
              id='startIndex' 
              placeholder='Start Index'
              value={startIndex} 
              onChange={e=> setStartIndex(e.target.value)}/>
            </FormGroup>
          </div>
          
        </div>
      </div>
    );
  };
  return <div>
    {mainHeader()}
    
  </div>;
}

export default App;
