import React, { Component } from 'react';
import './App.css';

import Comentario from './componentes/Comentario'

class App extends Component {
  
  state = {
    comentarios: [
      {
        nome: "Ricardo",
        email: "ricardo@email.com",
        data: new Date(2020, 3, 19),
        mensagem: 'Olá, tudo Bem?'
      },
      {
        nome: "Maria",
        email: "maria@email.com",
        data: new Date(2020, 3, 22),
        mensagem: 'Olá, tudo bem sim'
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map(comentario => (
            console.log(comentario)
          ))}

        <Comentario nome="Ricardo" email="ricardo@email.com" data={new Date(2020, 3, 19)} >
          Ola Tudo bem?
        </Comentario>
        <Comentario nome="Maria" email="maria@email.com" data={new Date(2020, 3, 21)} >
          Ola, tudo bem sim.
        </Comentario>        
          
      </div>
    );
  }  
}

export default App;
