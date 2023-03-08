import axios from "axios";
import React  from "react";
import { useState } from "react";
import './Delete.css'
function Del() {
  const [search,setSearch]=useState("");
  const searchBook=(evt)=>{
          axios.delete('http://127.0.0.1:8080/delete/'+search)
          .then( alert("Deleted S.No: "+search))
          .catch(err=>console.log(err))
  }
return (
  <>
          <div>
              <center>
                <h2>DELETE - DeleteDetails</h2>
              <div className="container5">
                <h4>Enter the Serial No to be deleted:-</h4>
                  <input type="text" placeholder="Enter here..."  value={search} onChange={e=>setSearch(e.target.value)}/><br/><br/>
                      <button onClick={searchBook}>Delete</button>
              </div>  
                </center>
          </div>
    </>
);
}

export default Del;