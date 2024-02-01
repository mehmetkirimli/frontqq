import { ChakraProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PostForm from "./components/Post/PostForm";
import Profile from "./components/Profile/Profile";
// ---------------------------------------------------------------------------------------------------------

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route exact path="/profiles/:profileId" Component={Profile}></Route>
            <Route exact path="/modal" Component={PostForm}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
