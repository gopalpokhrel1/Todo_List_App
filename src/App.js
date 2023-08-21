import React, {useState} from 'react';
import './App.css';
import './Style.css';
import Content from './Components/Content';
import ContentItem from './Components/ContentItem';






function App() {
   const[value, setValue]= useState([]);

   let getData= (data)=>{

    if(data!==""){
    setValue([...value, data])
    }
    else{
      alert("Please Enter task")
    }
   }
 
   const remove= (val)=>{

       
    const newData = value.filter((item)=>{
      return item!== val;
    })

    setValue(newData);
   }

 

  return (
    <>
    < div className="container">
        <Content send={getData} />
        {
          value.map((elem, id)=>{
            return(
              <ContentItem key={id} show={elem} index={id} hide={remove}/>
            )
          })
        }
     
    </div>
    
    </>

  );
}

export default App;
