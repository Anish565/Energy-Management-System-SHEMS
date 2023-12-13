import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FormTextElement } from './ui/FormElement';
import { useUserStore } from '../stores/userStore';
import axios from "axios"

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { setUser } = useUserStore();
  const navigate = useNavigate();


  const handleLogin = () => {
    setDisabled(true);
    axios.post("http://localhost:3001/auth/login", {
      custID: username,
      passcode: password,
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        return
      }
      setUser(response.data);
      console.log(response.data);
      return navigate('/', { replace: true });
    }).finally(() => {
      setDisabled(false);
    });
  }
  return (
    // <div className='h-screen flex flex-col justify-center items-center gap-4'>
    
      <div className="container" >
      <h2 className='flex-block text-4xl text-white font-bold m-1.5'>Login</h2>
        <form className='min-w-md'>
          {/* <div className="mb-5">
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required/>
          </div> */}
          <FormTextElement id='text' type='text' OnChange={(e) => setUsername(e.target.value)} placeholder='Username' d1="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" d2="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          <FormTextElement id='password' type='password' OnChange={(e) => setPassword(e.target.value)} placeholder='Password' d1="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"/>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <button type="submit" disabled={disabled} onClick={handleLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          
        </form>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Don't have an account? Create one <Link className="text-blue-600 hover:underline dark:text-blue-500" to="/register">here</Link></p>
    </div>
  )
}
