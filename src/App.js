import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora React</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer className="App-footer">
        <p>Desarrollado con React</p>
      </footer>
    </div>
  );
}

export default App;