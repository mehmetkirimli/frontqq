// components/ModalForm.js

import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { useState } from "react";
import "../Post/Modal.css";

const ModalForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Form verileriniz için gerekli state'leri burada tanımlayın
    date: "",
    text: "",
    username: "",
    email: "",
  });

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
    <div className="modalContainer">
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom" zIndex={10}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Gönder
            </Button>
            <Button onClick={onClose}>Kapat</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalForm;
