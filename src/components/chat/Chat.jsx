import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open,setOpen]=useState(false);
  const [text,setText]=useState("");

  const endRef=useRef(null);
  useEffect(()=>{
    endRef.current?.scrollIntoView({behaviour:"smooth"})
  })

  const handleEmoji=(e)=>{
    console.log(e);
    setText((prev)=>prev+e.emoji);
    setOpen(false);
  }

  console.log(text);

  return (

    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio esse natus eum, odio accusantium ut quam, velit minus asperiores provident rerum obcaecati quibusdam. Quod a consequatur sapiente repudiandae et?</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium, quidem esse recusandae veritatis ex molestias atque, dicta modi quasi assumenda possimus minus. Ad, natus? Inventore repellendus optio temporibus dolorum.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            {/* <img src="./avatar.png" alt="" /> */}
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium, quidem esse recusandae veritatis ex molestias atque, dicta modi quasi assumenda possimus minus. Ad, natus? Inventore repellendus optio temporibus dolorum.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium, quidem esse recusandae veritatis ex molestias atque, dicta modi quasi assumenda possimus minus. Ad, natus? Inventore repellendus optio temporibus dolorum.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
            <img src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium, quidem esse recusandae veritatis ex molestias atque, dicta modi quasi assumenda possimus minus. Ad, natus? Inventore repellendus optio temporibus dolorum.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium, quidem esse recusandae veritatis ex molestias atque, dicta modi quasi assumenda possimus minus. Ad, natus? Inventore repellendus optio temporibus dolorum.</p>
              <span>1 min ago</span>
            </div>
          </div>
          <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
          <input type="text" value={text} placeholder='Type a message...' onChange={e=>setText(e.target.value)}/>
          <div className="emoji">
            <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat;