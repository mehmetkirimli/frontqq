// components/ModalForm.js

import { Button, FormControl, FormHelperText, FormLabel, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import "../Post/Modal.css";

const ModalForm = () => {
  const [isBackdropBlurred, setIsBackdropBlurred] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const isError = input === "";
  const [size, setSize] = React.useState("sm");
  const [formData, setFormData] = useState({
    // Form verileriniz için gerekli state'leri burada tanımlayın
    date: "",
    text: "",
    username: "",
    email: "",
  });

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
    setIsBackdropBlurred(true);
  };

  const handleClose = () => {
    onClose();
    setIsBackdropBlurred(false);
  };

  const sizes = ["lg"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Form gönderme işlemleri burada yapılabilir
    console.log("Form Gönderildi:", formData);
    // İsterseniz form gönderildikten sonra modal'ı kapatabilirsiniz
    onClose();
  };

  return (
    <div className={`modalContainer ${isBackdropBlurred ? "blurred" : ""}`}>
      {sizes.map((size) => (
        <Button onClick={() => handleSizeClick(size)} key={size} m={4}>
          {" "}
          {`New Post`}
        </Button>
      ))}
      {/* ----------------------------------------------------------------------------------------------------------- */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom" zIndex={10}>
        {/* <ModalOverlay /> */}
        <ModalContent>
          {/* ----------------------------------------------------------------------------------------------------------- */}

          <ModalHeader>Q & Q</ModalHeader>

          {/* ----------------------------------------------------------------------------------------------------------- */}

          <ModalBody>
            {/* ----------------------------------------------------------------------------------------------------------- */}

            <FormControl>
              <FormLabel>New Quest</FormLabel>
              <Textarea placeholder="Here is a sample placeholder" name="name" value={formData.name} onChange={handleInputChange} />
              <FormHelperText>En az 1 en fazla 255 karakter</FormHelperText>
            </FormControl>

            {/* ----------------------------------------------------------------------------------------------------------- */}
          </ModalBody>

          {/* ----------------------------------------------------------------------------------------------------------- */}

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Gönder
            </Button>
            <Button onClick={handleClose}>Kapat</Button>
          </ModalFooter>

          {/* ----------------------------------------------------------------------------------------------------------- */}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalForm;
