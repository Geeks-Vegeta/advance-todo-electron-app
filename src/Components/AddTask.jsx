import React,{ useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import DateTimePicker from 'react-datetime-picker';
import { AiOutlineCheck } from "react-icons/ai";
import send from "../message-control/renderer";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

const AddTask=()=>{
    const [value, onChange] = useState(new Date());
    const [task, setTask] = useState();
    let navigate = useNavigate();


    const addingTask=(task, value)=>{
        let new_date = moment(value, 'MMMM Do YYYY, h:mm:ss a').format();
        send(`INSERT INTO task(name, date) VALUES ('${task}','${new_date}')`).then((result)=>{
            alert("Inserted Successfully");
        })
        navigate("/");

    }


    return(
        <>
        <MDBContainer className="my-5 w-50">
            <h2>Add New Task</h2>
            <MDBInput value={task} onChange={(e)=>setTask(e.target.value)} label='What is to be done?' id='typeText' type='text' />
            <div className="date-time">
            <label>Due Date</label> <br />
            <DateTimePicker className="datetimesize"  onChange={onChange} value={value} />
            </div>
            <div className="text-center">
            <MDBBtn onClick={()=>addingTask(task, value)}><AiOutlineCheck size={15}/> Add Task</MDBBtn>

            </div>


        </MDBContainer>
        
        </>
    )
}

export default AddTask;