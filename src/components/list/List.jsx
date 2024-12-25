import React from 'react'
import "./List.css"
import Chatlist from '../Chatlist/Chatlist';
import Userinfo from '../UserInfo/Userinfo';

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}

export default List;