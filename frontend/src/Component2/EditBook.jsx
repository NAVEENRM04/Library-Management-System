import React, { useEffect, useState } from 'react'
import 'date-fns/esm/fp/intlFormatDistance/index'
import axios from 'axios';
import Swal from 'sweetalert2';
import "./EditBook.css";
import Navbar from '../Component/Navbar';

const EditBook = () => {
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateData, setUpdateData] = useState({})
    const [search,setSearch] = useState("");
     const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/deletebookdata/${id}`).then((response) => {
            console.log(response);
            getUsers();
        })
    }
    const handleUpdate = (id) => {
        axios.put(`http://localhost:8080/updatebookdata/${id}`, updateData).then((response) => {
            console.log(response);
            getUsers();
        })
    }
    const handleSubmit2 = (id) => {
        console.log(updateData);
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                handleUpdate(updateData.bookid);
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    const handleclose = () => {
        setShowUpdate(false)
    }
    const handleSubmit = (id) => {
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
            getUsers();
        })
    }
    const [user, setUsers] = useState([])
    const getUsers = async () => {
        await axios.get("http://localhost:8080/getbookdata").then((response) => {
            console.log(response.data);
            setUsers(response.data)
        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        getUsers();
    }, [])
    const getUserByName = async ()=>{
        if(search!="")
       { await axios.get("http://localhost:8080/getbybookname",{params:{search:search}}).then((response) => {
            console.log(response.data);
            setUsers(response.data)
        }).catch((error) => console.log(error))}
    }
    useEffect(() => {
        getUserByName();
    }, [search])

    return (
        <>
            <Navbar setSearch={setSearch}/>
            <table class="container">
                <thead>
                    <tr>
                        <th><h1>Id</h1></th>
                        <th><h1>BookName</h1></th>
                        <th><h1>AuthorName</h1></th>
                        <th><h1>BookCategory</h1></th>
                        <th><h1>BookPrice</h1></th>
                        <th><h1>Date</h1></th>
                        <th><h1>Delete</h1></th>
                        <th><h1>Update</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => {
                        return (
                            <tr key={user.bookid}>
                                <th>{user.bookid}</th>
                                <td>{user.bookname}</td>
                                <td>{user.authorname}</td>
                                <td>{user.bookcategory}</td>
                                <td>{user.bookprice}</td>
                                <td>{user.bookpublishment}</td>
                                <td className='Action' onClick={()=> handleSubmit(user.bookid)}>click</td>
                                <td className='Action' onClick={()=>{ setShowUpdate(true);setUpdateData(user)}}>click</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            {showUpdate &&
            
                <div className="update_container">
                    <div className="update_box1">
                        <div class="login_form">
                            <div class="input_group">
                                <i class="fa fa-user"></i>
                                <input
                                    onChange={(e) => setUpdateData({ ...updateData, bookname: e.target.value })}
                                    type="text"
                                    placeholder="BookName"
                                    class="input_text"
                                    autocomplete="off"
                                    required
                                    value={updateData.bookname}
                                />
                            </div>
                            <div class="input_group">
                                <i class="fa fa-email"></i>
                                <input
                                    onChange={(e) => setUpdateData({ ...updateData, authorname: e.target.value })}
                                    type="text"
                                    placeholder="AuthorName"
                                    class="input_text"
                                    autocomplete="off"
                                    required
                                    value={updateData.authorname}
                                />
                            </div>
                            <div class="input_group">
                                <i class="fa fa-email"></i>
                                <input
                                    onChange={(e) => setUpdateData({ ...updateData, bookcategory: e.target.value })}
                                    type="text"
                                    placeholder="BookCategory"
                                    class="input_text"
                                    autocomplete="off"
                                    required
                                    value={updateData.bookcategory}
                                />
                            </div>
                            <div class="input_group">
                                <i class="fa fa-email"></i>
                                <input
                                    onChange={(e) => setUpdateData({ ...updateData, bookprice: e.target.value })}
                                    type="text"
                                    placeholder="BookPrice"
                                    class="input_text"
                                    autocomplete="off"
                                    required
                                    value={updateData.bookprice}
                                />
                            </div>
                            <div class="input_group">
                                <i class="fa fa-email"></i>
                                <input
                                    onChange={(e) => setUpdateData({ ...updateData, bookpublishment: e.target.value })}
                                    type="Date"
                                    placeholder="Date"
                                    class="input_text"
                                    autocomplete="off"
                                    required
                                    value={updateData.bookpublishment}
                                />
                            </div>
                            <div onClick={() =>{handleSubmit2(updateData.bookid);handleclose()} }  class="button_group" id="login_button">
                                <a><h5>Update</h5></a>
                            </div>
                                <div className="closebutton1"><button type="button" onClick={handleclose} class="btn-close" aria-label="Close"></button></div>
                            <br />
                        </div>

                    </div>
                </div>
            }
        </>
    )
}
export default EditBook;