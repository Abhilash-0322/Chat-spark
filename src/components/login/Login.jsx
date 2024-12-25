import React,{useState} from 'react'
import "./Login.css"
import { toast } from 'react-toastify';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
      });
    
    //   const [loading, setLoading] = useState(false);
    
      const handleAvatar = (e) => {
        if (e.target.files[0]) {
          setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0]),
          });
        }
      };

      const handleLogin=e=>{
        e.preventDefault();
        toast.success("Hello");
      }

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Email' name='email' />
                <input type="text" placeholder='Password' name='password'/>
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create An Account</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" />
                    Upload An Image</label>
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder='Username' name='Username' />
                <input type="text" placeholder='Email' name='email' />
                <input type="text" placeholder='Password' name='password'/>
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login