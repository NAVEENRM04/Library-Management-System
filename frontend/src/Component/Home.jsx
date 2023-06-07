import React from 'react';
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.css';
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
    <div className="homebody">
    <div className="des">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to Empress Knowledge ")
              .pauseFor(1000)
              .deleteAll()
              .typeString("A Online Library Management System")
              .start();
          }}
        />
      </div>
      <div className="content">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("  ")
              .pauseFor(6000)
              .typeString(" ")
              .changeDelay(1)
              .typeString(
                " This project is based on a sample library management system where only added user will to get or issue book.User have to pay and get subscription to become a user. User can login to this portal if he is added by admin.Books also can be added by admin.Librarian can issue book on issue page."
              )
              .start();
          }}
        />
        </div>
      </div>
    </>
    
  )
}

export default Home