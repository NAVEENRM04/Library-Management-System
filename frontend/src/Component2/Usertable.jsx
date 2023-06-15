import axios from 'axios'
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react'
import './UserTable.css'
import Navbar from '../Component/Navbar';

const Usertable = () => {
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateData, setUpdateData] = useState({})
    const [search,setSearch] = useState("");
    // const [setUserName] = useState("");
    // const [ setEmail] = useState("");
    // const [ setId] = useState("");


    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/deletedata/${id}`).then((response) => {
            console.log(response);
        })
    }
    const handleUpdate = (id) => {
        axios.put(`http://localhost:8080/updatedata/${id}`,updateData).then((response) => {
            console.log(response);
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
                handleUpdate(updateData.id);
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
            getUsers();
            window.location.reload();
        })
    }
    useEffect(() => {
        getUsers();
    }, [])
    const getUserByName = async ()=>{
        if(search!="")
       { await axios.get(`http://localhost:8080/getbyname/${search}`).then((response) => {
            console.log(response.data);
            setUsers(response.data)
        }).catch((error) => console.log(error))}
        else{
            getUsers();
        }
    }
    useEffect(() => {
        getUserByName();
    }, [search])

    const handleclose =()=>{
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
        await axios.get("http://localhost:8080/getdata").then((response) => {
            console.log(response.data);
            setUsers(response.data)
        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
                <Navbar setSearch={setSearch}/>
                <table class="container">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col"> Email</th>
                            <th scope="col">Remove</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td className='Action' onClick={() => handleSubmit(user.id)}>click</td>
                                    <td  className='Action' onClick={() => { setShowUpdate(true); setUpdateData(user) }}>click</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            {showUpdate &&
                <div className="update_container">
                    <div className="update_box">
                        <div class="login_form">
                            <div class="input_group">
                                <i class="fa fa-user"></i>
                                <input
                                    onChange={(e) => setUpdateData({ ...updateData, username: e.target.value })}
                                    type="text"
                                    placeholder="Username"
                                    class="input_text"
                                    autocomplete="off"
                                    required
                                    value={updateData.username}
                                />
                            </div>
                            <div class="input_group">
                                <i class="fa fa-email"></i>
                                <input
                                    onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
                                    type="text"
                                    placeholder="Email"
                                    class="input_text"
                                    autocomplete="off"
                                    required
                                    value={updateData.email}
                                />
                            </div>
                            <div onClick={() => handleSubmit2(updateData.id)} class="button_group" id="login_button">
                                <a><h5>Update</h5></a>
                            </div>
                            <br />
                                <div className="closebutton"><button type="button" onClick={handleclose} class="btn-close" aria-label="Close"></button></div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Usertable