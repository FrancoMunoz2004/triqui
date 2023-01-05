import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FcFlashOff, FcFlashOn } from "react-icons/fc";
const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => toggleColorMode()}
      pos="absolute"
      top="15"
      right="20"
      m="1rem"
    >
      {colorMode === "dark" ? (
        <FcFlashOn/>
      ) : (
        <FcFlashOff/>
      )}
    </Button>
  );
};
export default ToggleColorMode;


