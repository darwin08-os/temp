import React from 'react'
import {useState} from 'react'
export default function Login() {

    const [isSubmit,setIsSubmit] = useState(false)
    const [userInput1,setUserInput1] = useState('')
    const [userInput2,setUserInput2] = useState('')
    const [userNameError,setuserNameError] = useState('')
    

    const database = [{
        username:'dev',
        password:12345
    },{
        username:'harsh',
        password:12345
    }]
     
    

    const handleSubmit=(event)=>{
        event.preventDefault()
        const userData=database.find((val)=>val.username==userInput1 && val.password == userInput2)
        if (userData){
                setIsSubmit(true)
        }
        else{
           return setuserNameError('username or password incorrect!!')
        }
    }

    const renderform = (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setUserInput1(e.target.value)} /> <br />
            <span>{userNameError}</span> <br /><br />
            <input type="password" onChange={(e)=>setUserInput2(e.target.value)} /> <br />
            
            <input type="submit" />
        </form>
    )
  return (
    <div>
      {isSubmit? 'successfully login':renderform}
    </div>
  )
}
