import AddUser from "../addUser/AddUser";
import "./Chatlist.css"
import React,{useState} from 'react'

const Chatlist = () => {
  const [addMode,setMode]=useState(false);
  
  return (
    <div className="chatList">
      <div className="search">
        <div className="serchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "./minus.png": "./plus.png"} 
        alt="" 
        className='add' 
        onClick={()=>setMode((prev)=>!prev)}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" className="userimg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" className="userimg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" className="userimg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode &&<AddUser/>}
    </div>
  )
}

export default Chatlist