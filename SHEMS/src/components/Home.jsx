import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-4xl'>Welcome to SHEMS</h1> 
      <h1 className='text-4xl'>WIP</h1> 
      <h3 className='text-2xl'>Login <Link to="/login">here</Link></h3>
    </div>
  )
}
