// import { AiOutlineUser } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiChat, BiShare } from "react-icons/bi";
import { FaHeart } from "react-icons/fa"; // FaHeart, Font Awesome kalp ikonudur
import { Link as RouterLink } from "react-router-dom";

import CardSettings from "../Menu/Menu";
import "../Post/Post.css";

function Post(props) {
  const { title, text, userId, username } = props;
  const [isCardSettingsOpen, setCardSettingsOpen] = useState(false);

  const handleToggleDotsClick = () => {
    setCardSettingsOpen((prev) => !prev);
  };

  return (
    <div className="postContainer">
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        width="650px" /* İstediğiniz genişliği belirleyebilirsiniz */
        margin="10px" /* İstediğiniz boşluk miktarını belirleyebilirsiniz */
      >
        <Card maxW="xl" p="5">
          <CardHeader flexDirection="column">
            <Flex spacing="1" p="1">
              <Flex flex="1" p="1" gap="4" alignItems="center" flexWrap="wrap" marginTop="-6">
                <RouterLink to={"/profiles/" + userId} style={{ borderRadius: "50%", boxShadow: "0 0 0 2px rgba(1, 2, 1, 0.2)" }}>
                  <Avatar size="full" name={username} />
                </RouterLink>

                <Box style={{ display: "flex" }}>
                  <p style={{ fontSize: "xs", marginRight: "8px", color: "black" }}>{username}</p>
                  <p style={{ fontSize: "xs", color: "#808080" }}>@{userId}</p>
                </Box>
              </Flex>
              <IconButton variant="ghost" marginEnd="-20" marginTop="-4" colorScheme="green" aria-label="See menu" icon={<CardSettings />} onClick={handleToggleDotsClick} />
            </Flex>
          </CardHeader>

          {/* ---------------------------------------------------------------------------------------------------------- */}

          <CardBody textAlign="left" marginStart="2">
            <Text fontSize="sm">{text} tt</Text>
          </CardBody>

          {/* ---------------------------------------------------------------------------------------------------------- */}

          <CardFooter
            p="6"
            marginEnd="-20"
            marginBottom="-2"
            justify="space-between"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "120px",
              },
            }}
          >
            <Button flex="1" marginBottom="-8" variant="ghost" leftIcon={<FaHeart color="red" />} color="gray">
              Like
            </Button>
            <Button flex="1" marginBottom="-8" variant="ghost" leftIcon={<BiChat color="green" />} color="gray">
              Comment
            </Button>
            <Button flex="1" marginBottom="-8" variant="ghost" leftIcon={<BiShare color="green" />} color="gray">
              Share
            </Button>
          </CardFooter>

          {/* ---------------------------------------------------------------------------------------------------------- */}
        </Card>
      </Box>
    </div>
  );
}

export default Post;
