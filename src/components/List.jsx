import { BiTrash } from "react-icons/bi";
import { AiOutlineForm } from "react-icons/ai";
import { useState } from "react";
import "./List.css";
import { Box, Button, Center, Input } from "@chakra-ui/react";

//INICIA LISTA
export const List = ({ task }) => {
  const [marcado, setMarcado] = useState(false); //MARCADO TAREA
  const [claseLabel, setClaseLabel] = useState("label"); //EDITAR LABEL
  const [abrir, setAbrir] = useState(false); //DESPLIEGUE MENSAJE DE REALIZADO
  const [claseTitulo, setClaseTitulo] = useState(""); //EDITAR LO QUE VA A SALIR
  const [edit, setEdit] = useState(false); //DESPLIEGUE EDITAR TAREA
  const [add, setAdd] = useState(""); //CONTENIDO DEL EDITAR
  const [list2, setList2] = useState(""); //ALAMCENAR DATOS DEL EDITAR

  //TAREA TACHADA
  const tareaHecha = (e) => {
    console.log(e);
    if (marcado) {
      setClaseLabel("label");
      setMarcado(false);
    } else {
      setClaseLabel("label-underline");
      setMarcado(true);
    }
  };

  //DESPLEGAR MENSAJE
  const handleOpen = (e) => {
    console.log(e);
    if (abrir) {
      setClaseTitulo(" ");
      setAbrir(false);
    } else {
      setClaseTitulo("texto");
      setAbrir(true);
    }
  };

  //ELIMINAR
  const handleOnClick = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("tasks"));
    //ELIMINAR DATO SELECCIONADO
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === task.name) {
        data.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(data));
    window.location.reload();
  };
  //FINALIZA ELIMINAR

  //EDITAR
  //DESPLIEGUE EDITAR
  const handleOnSubmit = () => {
    if (edit) {
      setEdit(false);
      setAdd(" ");
    } else {
      setAdd("agregar");
      setEdit(true);
    }
  };
  //RECOJER EL DATO
  const handleOnSubmit2 = (e) => {
    e.preventDefault();
    let array = localStorage.getItem("tasks");
    array = JSON.parse(array);
    //ACTUALIZAR EL DATO DE NUESTRA TAREA
    for (let i = 0; i < array.length; i++) {
      if (list2 == array[i].name) {
        alert("la tarea ya existe");
        break;
      } else if (array[i].name == task.name) {
        array[i].name = list2;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(array));
    window.location.reload();
  };

  //INICIA LOS INPUTS
  return (
    <>
      <label className={claseLabel}>
        <Box h="5vh" display="flex" justifyContent="center">
          <Center>
            <Input
              cursor="pointer"
              type="checkbox"
              onClick={handleOpen}
              checked={marcado}
              onChange={tareaHecha}
              className="checkbox-round"
              value="first-checkbox"
            />
            <Box
              gap="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <p>{task.name}</p>

              <b>{task.description}</b>
            </Box>
          </Center>
          <Box
            w="50%"
            display="flex"
            justifyContent="flex-end;"
            alignItems="center"
          >
            {/* ELIMINAR */}
            <Button
              onClick={handleOnClick}
              bg="none"
              colorScheme="teal"
              variant="outline"
              border="none"
              cursor="pointer"
              h="22px"
            >
              <BiTrash color="red" />
            </Button>
            {/*EDITAR*/}
            <Button
              onClick={handleOnSubmit}
              bg="none"
              colorScheme="teal"
              variant="outline"
              border="none"
              cursor="pointer"
              h="22px"
              
            >
              <AiOutlineForm color="green" />
            </Button>
          </Box>
        </Box>
      </label>
      {/*DESPLIEGUE MENSAJE*/}
      {abrir ? <h5 className={claseTitulo}>Realizada</h5> : null}
      {/*DESPLIEGUE EDITAR*/}
      {edit ? (
        <form onSubmit={handleOnSubmit2}>
          <input
            type="text"
            placeholder="Editar"
            className={add}
            onChange={(e) => {
              setList2(e.target.value);
            }}
          ></input>
          <Button type="submit" className="edi">
            Editar
          </Button>
        </form>
      ) : null}
    </>
  );
};
//FINALIZA TODO
