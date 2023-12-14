import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FormTextElement } from './ui/FormElement'
import axios from "axios"
import { cleanData } from './utils/dompurify';

export const Register = () => {
  const [cfname, setCfname] = useState('');
  const [clname, setClname] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [unit, setUnit] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const navigate = useNavigate();

  const handleSingup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/signup", {
      cfname: cleanData(cfname),
      clname: cleanData(clname),
      custID: cleanData(user),
      passcode: cleanData(password),
      street: cleanData(street),
      unitno: cleanData(unit),
      city: cleanData(city),
      state: cleanData(state),
      zipcode: cleanData(zip),
      isBilling: true
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        return
      }
      return navigate("/login", { replace: true });
    });
  }
  



  return (
      <div className="container" >
      <h2 className='flex-block text-4xl text-white font-bold m-1.5'>Sign up</h2>
        <form className='min-w-md' onSubmit={handleSingup}>
          <FormTextElement id='cfname' type='text' OnChange={(e) => setCfname(e.target.value)} placeholder='First Name' />
          <FormTextElement id='clname' type='text' OnChange={(e) => setClname(e.target.value)} placeholder='Last Name' />
          <FormTextElement id='username' OnChange={(e) => setUser(e.target.value)} type='text' placeholder='Username' d1="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" d2="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          <FormTextElement id='password' type='password' OnChange={(e) => setPassword(e.target.value)} placeholder='password' d1="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"/>
          <FormTextElement id='StreetAddress' OnChange={(e) => setStreet(e.target.value)} type='text' placeholder='Street Address'/>
          <FormTextElement id='UnitNo' type='text' OnChange={(e) => setUnit(e.target.value)} placeholder='Unit No' />
          <FormTextElement id='city' type='text' OnChange={(e) => setCity(e.target.value)} placeholder='City' />
          <FormTextElement id='State' type='text' OnChange={(e) => setState(e.target.value)} placeholder='State'/>
          <FormTextElement id='ZipCode' type='text' OnChange={(e) => setZip(e.target.value)} placeholder='Zip Code'/>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          <p className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account? Login <Link className="text-blue-600 hover:underline dark:text-blue-500" to="/login">here</Link></p>
        </form>
    </div>
  )
}
