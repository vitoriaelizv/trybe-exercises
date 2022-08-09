// import React from "react";
// import Header from "./Header";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tarefas = ['Trabalhar', 'Ir para a faculdade', 'Levar o cachorro para passear', 'Arrumar a casa'];
  
  return (
    <div>
        <ul>
          { Task('Estudar') }
          { tarefas.map((tarefa) => <li>{ tarefa }</li>) }
        </ul>
    </div>
  );
}

export default App;
