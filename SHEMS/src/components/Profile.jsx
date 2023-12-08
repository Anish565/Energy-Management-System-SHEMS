import React from "react";
import { Link } from "react-router-dom";
import { FormTextElement } from "./ui/FormElement";

export const Profile = ({ user }) => {
    return(
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-2"><strong>Username:</strong> {user.username}</p>
        <p className="mb-2"><strong>Password:</strong> {user.password}</p>
        <div className="mt-4">
          {user.addresses.map((address, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded">
              <p className="font-semibold">Address {index + 1}:</p>
              <p className="mb-2">{address.street}, {address.city}, {address.zip}</p>
              <div className="mt-2">
                <p className="font-semibold">Devices:</p>
                <ul className="list-disc pl-5">
                  {address.devices.map((device, deviceIndex) => (
                    <li key={deviceIndex} className="mb-1">{device.name} - {device.type}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}