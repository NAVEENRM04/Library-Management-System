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
function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>

        <Route path="/home" element={<>   <Navbar/><Home />   </>}/>
        <Route path="/Book" element={<>   <Navbar/><Book />   </>}/>
        <Route path="/Adduser"element={<> <Navbar/><Adduser/> </>}/>
        <Route path="/Database"element={<> <Navbar/><Database/> </>}/>
        <Route path="/Viewdb"element={<> <Navbar/><Viewdb/> </>}/>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/loginbyusername" element={<Login />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
