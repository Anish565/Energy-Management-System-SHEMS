import React from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../stores/userStore'

export const Home = () => {
  const { user } = useUserStore();

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-4xl'>Welcome to SHEMS</h1> 
      <h1 className='text-4xl'>WIP</h1> 

      {user ? <h2 className='text-2xl'> Welcome {user.name}</h2>:<h3 className='text-2xl'>Login <Link to="/login">here</Link></h3>}

    </div>
  )
}
