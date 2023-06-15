

import axios from 'axios';
import React, { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import './Book.css';
import Swal from 'sweetalert2'

function Book() {
  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [bookDate, setBookDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(bookId===""||bookName===""||bookCategory===""||bookPrice===""||bookDate===""||authorName==="")
    {
        toast.error("Enter all fields");
    }
    else{
        axios.post("http://localhost:8080/savebookdata",{
            bookname:bookName,
            bookid:bookId,
            bookcategory:bookCategory,
            bookprice:bookPrice,
            authorname:authorName,
            bookpublishment:bookDate

        })
        .then((res)=>{
            console.log(res.data);
            if(res.data===' book info updated')
            {
              Swal.fire({
                icon: 'success',
                title: 'Sucess',
                text: 'Sucessfully Added Details',
              })
                setBookId('');
                setBookName('');
                setAuthorName('');
                setBookCategory('');
                setBookPrice('');
                setBookDate('');
            }
            else if(res.data==='Book available already')
            {
                toast.error("Book available already")
            }
        });
    }
  };

  return (
    <div className='bookmain'>
    <div className="register-box">
        <ToastContainer
        position="top"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box1">
          <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} required/>
            <label>Book ID:</label>
        </div>
        <div className="user-box1">
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
            />
            <label>Book Name:</label>
        </div>
        <div className="user-box1">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            />
            <label>Author Name:</label>
        </div>
        <div className="user-box1">
          <input
            type="text"
            id="bookCategory"
            className='bookCat'
            value={bookCategory}
            onChange={(e) => setBookCategory(e.target.value)}
            required
          />
          <label >Book Category:</label>
        </div>
        <div className="user-box1">
          <input
            type="text"
            id="bookPrice"
            className='bookPrice'
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
            required
          />
          <label >Book Price:</label>
        </div>
        <div className="user-box1">
          {/* <label>Date:</label> */}
          <input
            type="date"
            placeholder='yyyy-MM-dd'
            value={bookDate}
            onChange={(e) => setBookDate(e.target.value)}
            required
            />
          
        </div>
        <button className="bsubmit" onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div></div>
  );
}

export default Book;
