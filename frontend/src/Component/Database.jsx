import React from 'react'
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Swal from 'sweetalert2';

export default function Database() {


    const [username, setUserName] = useState("");
    const [bookname, setBookName] = useState("");
    const [date, setBookDate] = useState("");


    const navigate = useNavigate();

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };
    const handleBookDate = (e) => {
        setBookDate(e.target.value);
    };

    const handleBookName = (e) => {
        setBookName(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || bookname === "" | date === '') {
            toast.error("Enter all fields");
        }
        else {


            axios.post("http://localhost:8080/savelibdata", {
                username: username,
                bookname: bookname,
                date: date
            })
                .then((res) => {
                    console.log(res.data);
                    if (res.data === 'Book issued') {
                        toast.success("Book issued");
                    }
                    else if (res.data === "User Not Register") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'User Not Register!',
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: "Book isn't available!",
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    }
                });
        }
    };
    return (
        <div className='demologinbody'>
            <div class="login_form_container">
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <div class="login_form">
                    <h2>Issue</h2>
                    <div class="input_group">
                        <i class="fa fa-user"></i>
                        <input
                            onChange={handleUserName}
                            value={username}
                            type="text"
                            placeholder="User Name"
                            class="input_text"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="input_group">
                        <i class="fa fa-unlock-alt"></i>
                        <input
                            onChange={handleBookName}
                            value={bookname}
                            type="text"
                            placeholder="Book Name"
                            class="input_text"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="input_group">
                        <i class="fa fa-date"></i>
                        <input
                            onChange={handleBookDate}
                            value={date}
                            type="date"
                            placeholder="yyyy-MM-dd"
                            class="input_text"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div onClick={handleSubmit} class="button_group" id="login_button">
                        <a>Submit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
