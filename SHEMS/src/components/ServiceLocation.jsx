import React, { useState } from "react";
import { FormTextElement } from "./ui/FormElement";

export const Location = () => {
  const [street, setStreet] = useState('');
  const [unit, setUnit] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [movein, setMovein] = useState('');
  const [sqft, setSqft] = useState('');
  const [numbed, setNumbed] = useState('');
  const [numocc, setNumocc] = useState('');


    return (
        <div className="container">
            <h2 className="flex-block text-4xl text-white font-bold m-1.5">Add Service Location</h2>
            <form className="min-w-md">
                <FormTextElement id="street" OnChange={(e) => setStreet(e.target.value)} type="text" placeholder="Street"/>
                <FormTextElement id="unitno" OnChange={(e) => setUnit(e.target.value)} type="text" placeholder="Unit No"/>
                <FormTextElement id="city" OnChange={(e) => setCity(e.target.value)} type="text" placeholder="City"/>
                <FormTextElement id="state" OnChange={(e) => setState(e.target.value)} type="text" placeholder="State"/>
                <FormTextElement id="zipcode" OnChange={(e) => setZip(e.target.value)} type="text" placeholder="Zipcode (Eg. 00000)"/>
                <FormTextElement id="movein" OnChange={(e) => setMovein(e.target.value)} type="date" placeholder="Move In date"/>
                <FormTextElement id="sqft" OnChange={(e) => setSqft(e.target.value)} type="number" min="0" step="0.01" placeholder="Square Footage"/>
                <FormTextElement id="numBed" OnChange={(e) => setNumbed(e.target.value)} type="number" min="0" step="1" placeholder="Number of Bedrooms"/>
                <FormTextElement id="numOcc" OnChange={(e) => setNumocc(e.target.value)} type="number" min="0" step="1" placeholder="Number of Occupants"/>
                  <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
              <label htmlFor="billingadd" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Billing Address</label>
              </div>
                <button type="submit" className="text=white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Address</button>
                
          </form>
          

        </div>
    )
}