import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa"; // FaHeart, Font Awesome kalp ikonudur
import "../Post/Post.css";

function Post(props) {
  const { title, text } = props;

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
                {/* <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" /> */}
                <Box style={{ display: "flex" }}>
                  <p style={{ fontSize: "xs", marginRight: "8px", color: "black" }}>lefo</p>
                  <p style={{ fontSize: "xs", color: "#808080" }}>@lefoonten</p>
                </Box>
              </Flex>
              <IconButton variant="ghost" marginEnd="-20" marginTop="-4" colorScheme="green" aria-label="See menu" icon={<BsThreeDotsVertical />} />
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
