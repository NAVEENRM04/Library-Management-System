import axios from 'axios'
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react'
import './Viewdb.css';
import Navbar from '../Component/Navbar';

const Viewdb = () => {
    const handleDelete=(id) =>{
        axios.delete(`http://localhost:8080/deletelibdata/${id}`).then((response)=>{
            console.log(response);
        })
    }
    const [search,setSearch] = useState("");
    
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
    const getUsernameByName = async ()=>{
        if(search!="")
       { await axios.get(`http://localhost:8080/getbylib/${search}`).then((response) => {
            console.log(response.data);
            setBooks(response.data)
        }).catch((error) => console.log(error))}
        else{
            getBooks();
        }
    }
    useEffect(() => {
        getUsernameByName();
    }, [search])



    return (
        <>
        <Navbar setSearch={setSearch}/>
        <div className="container">
                <thead>
                    <tr>
                        <th><h1>Id</h1></th>
                        <th><h1>UserName</h1></th>
                        <th><h1>BookName</h1></th>
                        <th><h1>Date</h1></th>
                        <th><h1>Delete</h1></th>
                        
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
                                <td  className='Action' onClick={()=>handleSubmit(book.sno)}>click</td>
                            </tr>
                        )
                    })}
                </tbody>
        </div>
        </>
    )
}

export default Viewdb