import React from 'react'
import './signup-in.css'
// import Sign from './Sign'
import Login from './login'
export const SignUp = () => {
    // const [toggle, setToggle] = useState(false)
    // const handleClick = () =>{
    //     setToggle(true);
    // }
    // const handleLogin = ()=>{
    //     setToggle(false)
    // }
  return (
    <div className='signup-cont'>
        <div className='signup-body'>
            {/* <Sign/> */}
            <Login/>
        </div>
    </div>
  )
}
