import { useEffect, useState } from "react";
import { useUserStore } from "../stores/userStore";
import axios from "axios";

export const Profile = () => {
  const { user } = useUserStore();

  const [serviceLocs, setServiceLocs] = useState([]);

  const getServiceLocations = () => {
    try {
      axios.get("http://localhost:3001/customer/serviceLocs", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      }).then((response) => {
        setServiceLocs(response.data);
      })
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }

  useEffect(() => {
    getServiceLocations();
  }, [])



    return(
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
      <br />
      <div className="flex flex-col">
        <p className="text-2xl">Addresses</p>
        {serviceLocs ? serviceLocs.map((serviceLoc, i) => {
          // create a card for serviceLoc
          return (
            <div className="flex flex-col bg-gray-700 p-4 my-4 rounded-lg" key={i}>
              <div className="flex flex-row justify-between">
                <p className="text-white text-xl font-bold">{serviceLoc.street}</p>
                <p className="text-white text-xl font-bold">{serviceLoc.city}, {serviceLoc.state} {serviceLoc.zipcode}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-white text-xl font-bold">Move In Date: {serviceLoc.moveindate}</p>
                <p className="text-white text-xl font-bold">Square Footage: {serviceLoc.squarefoot}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-white text-xl font-bold">Number of Bedrooms: {serviceLoc.numbed}</p>
                <p className="text-white text-xl font-bold">Number of Occupants: {serviceLoc.numoccupants}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-white text-xl font-bold">Billing Address: {serviceLoc.isbilling ? "Yes" : "No"}</p>
              </div>
            </div>
          )
        }) : <p className="text-2xl">Loading..</p>}
      </div>
    </div>
    )
}