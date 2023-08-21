import React from 'react'
import '../Style.css';

export default function ContentItem(props) {
 
  function changeline(){
    const item = document.querySelector("#list-item");

    console.log(item);

    item.classList.toggle("line-through");
  }


  return (
    <div className="paragraph">
        <p id='list-item'>{props.show}</p>
        <button onClick={changeline}><i class="fa-solid fa-check" ></i></button>
        <button className='x-mark' onClick={()=>props.hide(props.show)}><i class="fa-solid fa-xmark"></i></button>
        
        
    </div>
  )
}
