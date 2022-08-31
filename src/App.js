import React from 'react';
import './index.css';
import Container from './components/container/Container'
import {GlobalProvider} from './Context/UseContext';

function App() {


  return (
  <GlobalProvider>
    <Container />
  </GlobalProvider>
  );
}

export default App;
