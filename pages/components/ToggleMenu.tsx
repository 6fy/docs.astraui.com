import { Menu, MenuItem, Button, Box } from "astra-ui-kit";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        onClick={handleToggle}
        endIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}>
        Toggle Menu
      </Button>
      {isOpen && (
        <Menu sx={{ color: "black" }}>
          <MenuItem onClick={() => setIsOpen(false)}>Menu Item 1</MenuItem>
          <MenuItem onClick={() => setIsOpen(false)}>Menu Item 2</MenuItem>
          <MenuItem onClick={() => setIsOpen(false)}>Menu Item 3</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default ToggleMenu;
