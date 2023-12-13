import { useEffect, useState } from "react";
import { FormSelectElement } from "./ui/FormSelectElement";
import axios from "axios";
import { useUserStore } from "../stores/userStore";

export const ManageServiceLoc = () => {
// id, label, value, setFunc,defaultValue="Please choose an option", options=[]

const user = useUserStore((state) => state.user);

const [serviceLocs, setServiceLocs] = useState([]);
const [serviceLoc, setServiceLoc] = useState('');

const getServiceLocations = () => {
    try {
      axios.get("http://localhost:3001/customer/serviceLocs", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      }).then((response) => {
        console.log(response.data)
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

  const deleteServiceLoc = (e) => {
    e.preventDefault();
    const serviceid = serviceLoc.split('-')[0];
    console.log(serviceid);
    axios.delete(`http://localhost:3001/customer/serviceLoc/${serviceid}`, {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }).then((response) => {
        if (response.data.error) {
            alert(response.data.error);
            return
        }
        alert(response.data.message);
        getServiceLocations();
    })
  }


    return (
        <div className="container">
            <h1 className="flex-block text-5xl align-middle font-bold m-1.5">Manage Service Location</h1>
            <form className="min-w-md" onSubmit={deleteServiceLoc}>
                <div className="flex-col mb-5">
                    <div>
                        <FormSelectElement id="serviceLoc" label="Service Location" value={serviceLoc} setFunc={setServiceLoc} options={serviceLocs.map((item) => `${item.serviceid}-${item.street}`)} defaultValue="Select Service Location"/>
                    </div>
                    <div>
                        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete Location</button>
                    </div>
                </div>
            </form>
        </div>
    )
}