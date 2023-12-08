import React from "react";
import { Form, Link } from "react-router-dom";
import { FormTextElement } from "./ui/FormElement";

export const Location = () => {
    return (
        <div className="container">
            <h2 className="flex-block text-4xl text-white font-bold m-1.5">Add Service Location</h2>
            <form className="min-w-md">
                <FormTextElement id="street" type="text" placeholder="Street"/>
                <FormTextElement id="unitno" type="text" placeholder="Unit No"/>
                <FormTextElement id="city" type="text" placeholder="City"/>
                <FormTextElement id="state" type="text" placeholder="State"/>
                <FormTextElement id="zipcode" type="text" placeholder="Zipcode (Eg. 00000)"/>
                <button type="submit" className="text=white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
          </form>
          

        </div>
    )
}