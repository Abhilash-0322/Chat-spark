import React from 'react'
import "./Userinfo.css"

const Userinfo = () => {
  return (
    <div className="userInfo">
        <div className="user">
            <img src="./avatar.png" alt="avatar" />
            <h2 className="username">John Doe</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt="image"/>
            <img src="./video.png" alt="image"/>
            <img src="./edit.png" alt="image"/>
        </div>
    </div>
  )
}

export default Userinfo