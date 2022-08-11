import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
