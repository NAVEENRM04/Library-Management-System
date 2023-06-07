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
    <div className="bookcontainer">
        <ToastContainer
        position="bottom-left"
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
        <div className="bookform-group">
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            className='bookId'
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </div>
        <div className="bookform-group">
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            className='bookName'
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="bookform-group">
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            className='authorName'
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="bookform-group">
          <label htmlFor="bookCategory">Book Category:</label>
          <input
            type="text"
            id="bookCategory"
            className='bookCat'
            value={bookCategory}
            onChange={(e) => setBookCategory(e.target.value)}
          />
        </div>
        <div className="bookform-group">
          <label htmlFor="bookPrice">Book Price:</label>
          <input
            type="text"
            id="bookPrice"
            className='bookPrice'
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
          />
        </div>
        <div className="bookform-group">
          <label htmlFor="bookDate">Date:</label>
          <input
            type="date"
            placeholder='yyyy-MM-dd'
            id="bookDate"
            className='bookDate'
            value={bookDate}
            onChange={(e) => setBookDate(e.target.value)}
            />
          
        </div>
        <button className="bsubmit" onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div></div>
  );
}

export default Book;
