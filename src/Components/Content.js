import React,{useState} from 'react'
import '../Style.css';

export default function Content(props) {

    const[data, setData]= useState("");

    const insertData= (e)=>{
        
        setData(e.target.value);
        
    }

    const handlevent= (e)=>{
        if(e.keyCode===13){
            props.send(data);
            setData('');
        }
    }
  return (
    <>
      <div className="input">
        <input type="text" placeholder='✍️ Enter the task' value={data} onChange={insertData} onKeyDown={handlevent} />
        <span>
            <button onClick={()=>{ props.send(data)
            setData("")}}>
            <i class="fa-solid fa-plus"></i>
            </button>
        </span>
      </div>
    </>
  )
}

