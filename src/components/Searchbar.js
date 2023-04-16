import { useState } from 'react';
import Mockdata from '../db.json';
import React from 'react'   

const Searchbar = () => {
    const [searchTerm, setSearchTerm]=useState('');
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={(event)=>{
        setSearchTerm(event.target.value);
      }} />
      {Mockdata.tasks.filter((val)=>{
         if(searchTerm===""){
            // return val;
         }else if(val.text.toLowerCase().includes(searchTerm.toLowerCase())){
           return val;
         }
      }).map((val,key)=>{
        return (
          <div className='user' key={key}>
             <p> {val.text}</p>
          </div>
        )
      })
      }
    </div>
  )
}

export default Searchbar