import { MDBContainer } from 'mdb-react-ui-kit';
import React, {useEffect, useState} from 'react';
import send from "../message-control/renderer";

const Finished=()=>{

    const [task, setTask] = useState([]);
    const [check, setCheck] = useState(true);

    useEffect(()=>{
        const sql="select * from task where finish='true'";

        send(sql).then((result)=>{
            setTask(result);
        })

    },[])


    return(
        <>
        {/* {(task && JSON.stringify(task, null, 2))||"no data"} */}
        <MDBContainer className='my-5'>
            <h3 className='text-center text-muted'>Finished Task</h3>

            {task?(
                <>
            <div className="center-todo-list w-50 mx-auto">

            {task.map((data, idx)=>{
                return(
                    <>
                        <div className="todo-list">
                            <input type="checkbox" defaultChecked={check} onChange={()=>setCheck(true)}  name="" id="" />
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
                </>
            )}
        </MDBContainer>

        </>
    )
}

export default Finished;