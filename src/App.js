import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './Components/Header/Header';
import TableContent from './Components/TableContent/TableContent';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <TableContent></TableContent>
    </div>
  );
}

export default App;
