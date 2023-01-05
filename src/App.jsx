import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm";
import Task from "./components/Task";
import ToggleColorMode from "./components/ToggleColorMode";
import { Box } from "@chakra-ui/react";
//AQUI INICIA TODO
function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);
  //FUNCION QUE NO GUARDE DOS DATOS IGUALES
  function createLista(datos) {
    if (
      !tasks.find(
        (task) =>
          task.name === datos.name && task.description === datos.description
      )
    ) {
      setTasks([
        ...tasks,
        { name: datos.name, description: datos.description },
      ]);
      setError(false);
    } else if (datos.name === datos.name) {
      setError(true);
    } else {
      setError(false);
    }
  }
  //GUARDANDO EL DATO EN UNA VARIABLE
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);
  //RENDERIZAMOS EL DATO
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //TABLA
  return (
    <div className="container">
      <ToggleColorMode />
      <div className="sub-container">
        <Header createLista={createLista} />
        <TaskForm tasks={tasks} />
        <Task />
        {error ? <span class="error"> esta tarea ya existe</span> : <></>}
      </div>
    </div>
  );
}

export default App;
//FINALIZA TODO
