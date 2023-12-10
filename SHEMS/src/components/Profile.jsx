import React from "react";
import { Link } from "react-router-dom";
import { FormTextElement } from "./ui/FormElement";
import { useUserStore } from "../stores/userStore";

export const Profile = () => {
  const { user } = useUserStore();
    return(
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
      <div className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-2 font-serif text-white-2xl"><strong>Username:</strong> {user.name}</p>
      </div>
    </div>
    )
}