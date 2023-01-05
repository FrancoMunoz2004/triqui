import { Button, WrapItem } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "./Task.css";

export const Task = () => {
  const [log, setLog] = useState(0);
  const handleOnClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    let tarea = JSON.parse(localStorage.getItem("tasks"));
    if (tarea === null) {
      setLog(0);
    } else {
      setLog(tarea.length);
    }
  }, [log]);

  return (
    <div className="cajita">
      <section className="pendiente">
        <h3 className="parrafo"> Tienes {log} tareas pendientes </h3>
      </section>
      <WrapItem width="50%" display="flex" justifyContent="flex-end">
        <Button
          onClick={handleOnClick}
          colorScheme="red"
          cursor="pointer"
          bg="rgb(129, 0, 0)"
          marginRight="35px"
          marginTop="20px"
          marginBottom="20px"
          borderRadius="10px"
        >
          Limpiar
        </Button>
      </WrapItem>
    </div>
  );
};
export default Task;
