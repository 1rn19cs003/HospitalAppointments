import React, { useEffect } from 'react';
import  { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FormGroup, Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import PhoneInput from 'react-phone-number-input/react-native-input'
// import axios from 'axios';
// import base_url from '../../server/bootapi';
// import { toastr } from 'react-toastify'

const Register = () => {
    useEffect(() => {
        document.title = "Register";
    }, []);


    // const getAllEventsFromServer=()=>{
    //     axios.get(`${base_url}/register`).then(
    //         (response)=>{
    //             toastr.success('Sucess full registerd',{
    //                 position:'bottom-center'
    //             });
    //             console.log(response.data);
    //             console.log("correct");

    //             setEvents(response.data);
    //         },
    //         (error)=>{
    //             toastr.error('Something went wrong');
    //             console.log(error);
    //         }
    //     );

    // };

    // const [events,setEvents]=useState([]);
    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <form className="text-left my-3 mx-5">
                <h1 className="text-center">Book Appointment</h1>
                <div className="mb-4" style={{ width: '400px' }}>
                    <label for="exampleInputFName" className="form-label">First Name</label>
                    <input type="fname" placeholder="First Name"  className="form-control" id="exampleInputFName" aria-describedby="fnameHelp" />
                    <div id="fnameHelp" class="form-text"></div>
                </div>
                <div className="mb-4" style={{ width: '400px' }}>
                    <label for="exampleInputLName" className="form-label">Last Name</label>
                    <input type="lname" placeholder="Last Name" className="form-control" id="exampleInputLame" aria-describedby="lnameHelp" />
                    <div id="lnameHelp" class="form-text"></div>
                </div>
                <div className="mb-4" style={{ width: '400px' }}>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder="E-mail" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div><div className="mb-4" style={{ width: '40%' }}>
                    <label for="exampleInputMob" className="form-label">Mobile No.</label>
                    <TextField 
                        style={{
                            marginLeft: "20px",
                        }}
                        type="tel"
                        error={isError}
                        value={mobile}
                        label="Enter Phone Number"
                        onChange={(e) => {
                            setmobile(e.target.value);
                            if (e.target.value.length > 10) {
                                setIsError(true);
                            }
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                +91
                            </InputAdornment>,
                        }}
                    />
                    </div>
                <div className="mb-3" style={{ width: '400px' }}>
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" />
                </div>
               
                <div className="mb-4" style={{ width: '400px' }}>
                    <label for="exampleInputLName" className="form-label">Pick an Appointment Date</label>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
                </div>
                <FormGroup className="title" style={{ width : '600px' }}>
                     <label for="description">A brief about illness</label>
                     <Input type="textarea"
                         placeholder="Problems"
                         name="description"
                         id="description"
                            //  onChange={(e) => {
                            //      setEvent({ ...event, description: e.target.value });
                            //  }}
                        style={{height:'100px'}}
                     />
                     </FormGroup>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}


export default Register;
