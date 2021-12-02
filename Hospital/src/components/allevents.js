import React, { useState, useEffect } from 'react';
import Event from "./event";
import base_url from '../server/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import auth from './authGuard'
import { Button } from 'reactstrap';
const Allevent = props =>{
 
    useEffect(() => {
        document.title="All events";
        // calling or loading server
        getAllEventsFromServer();
    },[]);

    // function to call server to get request
    const getAllEventsFromServer = () => {
        axios.get(`${base_url}/events`).then(
            (response)=>{
                // for sucess
                // console.log(response);
                // console.log(alert("Course has been Added Sucessfully"));
                toast.success('Events has been added',{
                position:'bottom-center'
                });
                console.log(response.data);
                console.log("correct");

                setEvents(response.data);

            },
            (error)=>{
                // for an error
                toast.error('Something went wrong');
                console.log(error);
                console.log(alert("Something went wrong \n Check your sever once😟"))
            }
        );
    };

    const[events,setEvents]= useState([]);

    const updateEvents=(id)=>{
        setEvents(events.filter((c)=>c.id!==id));
    }

    return(
        <div className="text-center my-3 py-3">
            <div className="logout" style={{alignContent:'flex-end'}}>
                <Button color="default" onClick={
            ()=>{
            auth.logout(()=>{
                props.history.push('/admin-login');
            });
        }}>Logout</Button>
        </div>
            <h1>All Upcoming Appointments</h1>
            <p>List of All Appointments are</p>
            {events.length > 0 
                ? events.map((item) => <Event key ={item.id} events ={item} update={updateEvents} />)
                :"No Upcoming Appointments are there 😕" }
        </div>
    );
}

export default Allevent;