import './App.css';

import Comentario from './componentes/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome="Ricardo" email="ricardo@email.com" data={new Date(2020, 3, 19)}>
        Ola Tudo bem?
      </Comentario>
      <Comentario nome="Maria" email="maria@email.com" data={new Date(2020, 3, 21)} >
        Ola, tudo bem sim.
      </Comentario>
      <Comentario nome="Ricardo" email="ricardo@email.com" data={new Date(2020, 3, 21)} >>
        Hoje vamos desenvolver qual projeto ?
      </Comentario>
      <Comentario nome="Maria" email="maria@email.com" data={new Date(2020, 3, 21)} >
        Vamos Conversar com a equipe toda para poder definimos. 
      </Comentario>
        
    </div>
  );
}

export default App;
