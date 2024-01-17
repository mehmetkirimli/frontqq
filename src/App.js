import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/profiles/:profileId" Component={Profile}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
