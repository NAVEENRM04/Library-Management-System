import React from 'react';
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.css';
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
    <div className="homebody1">
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
      <div className="content1">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("  ")
              .pauseFor(6000)
              .typeString(" ")
              .changeDelay(1)
              .typeString(
                " This project is based on a sample library management system where only added user will to get or issue book.User have to pay and get subscription to become a user. User can login to this portal if he is added by admin.Books also can be added by admin.Librarian can issue book on issue page.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read.  "
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