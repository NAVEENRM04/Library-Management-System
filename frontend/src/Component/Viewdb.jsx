import axios from 'axios'
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react'
import './Viewdb.css';

const Viewdb = () => {
    const handleDelete=(id) =>{
        axios.delete(`http://localhost:8080/deletelibdata/${id}`).then((response)=>{
            console.log(response);
        })
    }
    const handleSubmit=(id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
                getBooks();
          })
    }
    const [books, setBooks] = useState([])
    const getBooks = async () => {
        await axios.get("http://localhost:8080/getlibdata").then((response) => {
            console.log(response.data);
            setBooks(response.data)
        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        getBooks();
    }, [])


    return (
        <div className="tablepage">
        <div className='fulltable'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => {
                        return (
                            <tr key={book.sno}>
                                <th scope="row">{book.sno}</th>
                                <td>{book.username}</td>
                                <td>{book.bookname}</td>
                                <td>{book.date}</td>
                                <td><button className='Action' onClick={()=>handleSubmit(book.sno)}>Delete</button></td>
                            </tr>

                        )

                    })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Viewdb