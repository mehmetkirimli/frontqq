// components/ModalForm.js

import { Button, FormControl, FormHelperText, FormLabel, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import "../Post/Modal.css";

const ModalForm = (props) => {
  const { profile_id, refreshPosts } = props;
  const [isBackdropBlurred, setIsBackdropBlurred] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const isError = input === "";
  const [size, setSize] = React.useState("sm");
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    // Form verileriniz için gerekli state'leri burada tanımlayın
    // date: "",
    id: "",
    title: "",
    text: "",
    profile_id: "",
    // email: "",
  });

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
    setIsBackdropBlurred(true);
  };

  const handleClose = () => {
    onClose();
    setIsBackdropBlurred(false);
    setIsSent(false);
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
    savePost();
    setIsSent(true);
  };
  const savePost = async () => {
    try {
      const response = await fetch("/posts/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: formData.name,
          profile_id: profile_id, // TODO Burada Profile Id bilgisi çekilmeli ve set edilmeli
        }),
      });
      if (response.ok) {
        console.log("Post başarıyla oluşturuldu");
      } else {
        console.error("Bir hata oluştu:", response.statusText);
      }
      onClose();
      refreshPosts();
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
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
