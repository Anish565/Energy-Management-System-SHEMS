import React from 'react'
import { FormTextElement } from './ui/FormElement'
import { Form } from 'react-router-dom'

export const DeviceRegister = () => {
  return (
    <div className='container'>
        <h1 className='flex-block text-5xl align-middle font-bold m-1.5'>Device Registeration</h1>
        <form className='min-w-md'>
        <div className='flex-col mb-5'>
            <div>
                <FormTextElement id="device" label="Device Name" type="text" placeholder='Name of the Device'/>
            </div>
            <div>
                <FormTextElement id="modelnum" label="Model Number" type="text" placeholder='Search...'/>
            </div>
            <div>
                <FormTextElement id="nickname" label="Nickname" type="text" placeholder="Optional..."/>
            </div>
            <div>
                <FormTextElement id="serviceLoc" label='Location' type="text" placeholder="Search..."/>
            </div>

            <div><button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Device</button></div>
            </div>
            {/* this will have the previous;y stored values in the databse about the devices */}

        </form>
    </div>
  )
}