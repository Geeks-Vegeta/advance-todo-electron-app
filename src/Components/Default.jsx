import { MDBContainer } from 'mdb-react-ui-kit';
import React, {useEffect, useState} from 'react';
import send from "../message-control/renderer";

const Default=()=>{

    const [task, setTask] = useState([])

    useEffect(()=>{
        const sql="select * from task where finish='false'";
        send(sql).then((result)=>{
            console.log(result);
            setTask(result);
        })
        console.log(task)

    },[])


    const checking=(id, idx)=>{
        const new_sql=`update task set finish='true' where id=${id}`;
        send(new_sql).then((result)=>{
            setTask(result);
        })
        setTask((data)=>data.filter(i=>i.id !== idx));

    }


    return(
        <>
        {/* {(task && JSON.stringify(task, null, 2))||"no data"} */}
        <MDBContainer className='my-5'>
            <h3 className='text-center'>Task To Do</h3>
            {task.length!==0?(
                <>
            <div className="center-todo-list w-50 mx-auto">

            {task.map((data, idx)=>{
                return(
                    <>
                        <div className="todo-list">
                            <input type="checkbox" onClick={()=>checking(data.id)}  name="" id="" />
                            <span>{data.name}</span>
                            <span>{data.date}</span>
                        </div>
                        
                    </>
                )
            })}
            </div>

            </>
            ):(
                <>
                <p className='text-muted text-center'>No task available</p>
                </>
            )}
        </MDBContainer>

        </>
    )
}

export default Default;