import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import "./Header.css";
import { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";


export const Header = (props) => {
  console.log(props);
  const [name, setLista] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    setLista("");
    console.log(description);
    setDescription("");
    if (name.length < 3) {
      setError(true);
    } else {
      setError(false);
      props.createLista({ name, description });
    }
  };

  //inicio para agregar tarea
  return (
    <Box w="20vw">
      
      <h1>TASKS LIST</h1>
      <form onSubmit={onSubmit} className="formu">
        <FormControl
          w="90%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box w="100vw" gap="10px">
            <Stack spacing={100}>
              <Input
                w="90%"
                p="10px"
                colorScheme="black"
                size="md"
                type="text"
                placeholder="Agregar nueva tarea"
                _placeholder={{ color: "inherit" }}
                value={name}
                onChange={(e) => {
                  setLista(e.target.value);
                }}
              />
            </Stack>

            <br></br>
            {error ? (
              <span className="error">
                El nombre de la tarea tiene que se mayor a 3
              </span>
            ) : (
              <></>
            )}

            <Textarea
              w="95%"
              h="10vh"
              color="black"
              bg="rgb(201, 200, 200)"
              placeholder="Agregar description"
              _placeholder={{ color: "black" }}
              size="sm"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Box>

          <Button
            type="submit"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg=" rgb(0, 225, 255)"
            w="35px"
            border="none"
            h="32px"
            cursor="pointer"
          >
            <AiOutlinePlus /> 
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Header;
