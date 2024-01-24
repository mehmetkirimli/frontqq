import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
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
        width="500px" /* İstediğiniz genişliği belirleyebilirsiniz */
        margin="10px" /* İstediğiniz boşluk miktarını belirleyebilirsiniz */
      >
        <Card maxW="md">
          <CardHeader flexDirection="column">
            <Flex spacing="1">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                {/* <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" /> */}

                <Box>
                  <Heading size="sm">Kullanıcı Adı Soyadı</Heading>
                  <Text>@username</Text>
                  <Text>{title}</Text>
                </Box>
              </Flex>
              <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<BsThreeDotsVertical />} />
            </Flex>
          </CardHeader>

          {/* ---------------------------------------------------------------------------------------------------------- */}

          <CardBody textAlign="center" justifyContent="center">
            <Text alignItems="center">{text}</Text>
          </CardBody>

          {/* ---------------------------------------------------------------------------------------------------------- */}

          {/* <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        /> */}

          {/* ---------------------------------------------------------------------------------------------------------- */}

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
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
