import React from 'react';
import FormNoControlado from './components/FormNoControlado';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <div className="container">
      <h1>Formularios</h1>
      <FormNoControlado />
      <hr/>
      <Formulario />
    </div>
  );
}

export default App;
