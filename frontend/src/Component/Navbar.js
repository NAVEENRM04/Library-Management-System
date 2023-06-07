import React from 'react'
import "../css/Navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li onClick={() => handleNavigate('/home')} class="nav-item  nav-link ">Home</li>
              <li onClick={() => handleNavigate('/viewdb')} class="nav-item nav-link ">View Database</li>
              <li onClick={() => handleNavigate('/Book')} class="nav-item  nav-link "><span >Add Book</span></li>
              <li onClick={() => handleNavigate('/Adduser')} class="nav-item nav-link "><span>Add User</span></li>
              <li onClick={() => handleNavigate('/Database')} class="nav-item nav-link "><span>Issue book</span></li>
              <li onClick={() => handleNavigate('/Edituser')} class="nav-item nav-link "><span>Edit User</span></li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar