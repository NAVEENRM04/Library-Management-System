import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Book from "./Component/Book";
import Home from "./Component/Home";
import Adduser from "./Component/Adduser";
import Navbar from "./Component/Navbar";
import Database from "./Component/Database";
import Viewdb from "./Component/Viewdb";
import Usertable from "./Component2/Usertable";
import EditBook from "./Component2/EditBook";

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>

        <Route path="/home" element={<>     <Navbar/><Home />   </>}/>
        <Route path="/Book" element={<>     <Navbar/><Book />   </>}/>
        <Route path="/Adduser"element={<>   <Navbar/><Adduser/> </>}/>
        <Route path="/Database"element={<>  <Navbar/><Database/></>}/>
        <Route path="/Viewdb"element={<>    <Viewdb/>  </>}/>
        <Route path="/Usertable"element={ <Usertable/>}/>
        <Route path="/EditBookDetail"element={<>  <EditBook/></>}/>
        
        
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/loginbyusername" element={<Login />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
