import { useEffect, useState } from 'react'
import { FormSelectElement } from './ui/FormSelectElement'
import axios from 'axios';
import { useUserStore } from '../stores/userStore';

export const DeviceRegister = () => {
    
    const [devices, setDevices] = useState([]);
    const [deviceType, setDeviceType] = useState([]);
    const [modelnum, setModelnum] = useState([]);

    const [serviceLocs, setServiceLocs] = useState([]);

    const user = useUserStore((state) => state.user);

    const [selectedDevice, setSelectedDevice] = useState('');
    const [selectedModelnum, setSelectedModelnum] = useState('');
    const [selectedServiceLoc, setSelectedServiceLoc] = useState('');

    

    const getDevices = () => {
        try {
            axios.get('http://localhost:3001/customer/devices', {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }).then((response) => {
                setDevices(response.data.devices);
                setDeviceType([... new Set(response.data.devices.map((device) => device.devicetype))]);
            })
        } catch (e) {
            console.log(e);
            alert(e)
        }
    }

    const getServiceLocs = () => {
        try {
            axios.get('http://localhost:3001/customer/serviceLocs', {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }).then((response) => {
                setServiceLocs(response.data);
            })
        } catch (e) {
            console.log(e);
            alert(e)
        }
    }

    useEffect(() => {
        getDevices();
        getServiceLocs();
    }, [])

    useEffect(() => {
        if (devices.length === 0 || !devices) return;
        setModelnum(devices.filter((device) => device.devicetype === selectedDevice).map((d) => d.modelnum) ?? []);
    }, [devices, selectedDevice])


    const handleCreateDevice = (e) => {
        e.preventDefault();

        const device = devices.filter((device) => device.devicetype === selectedDevice && device.modelnum === selectedModelnum)[0];


        try {
            axios.post('http://localhost:3001/customer/device/register', {
                deviceID: device.deviceid,
                serviceID: selectedServiceLoc.split('-')[0]
            }, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }).then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                    return
                }
                alert('Device registered successfully');
                return;
            }).finally(() => {
                setSelectedDevice('');
                setSelectedModelnum('');
                setSelectedServiceLoc('');
            
            })
        } catch (e) {
            console.log(e);
            alert(e)
        }
    }

    return (
        <div className='container'>
            <h1 className='flex-block text-5xl align-middle font-bold m-1.5'>Device Registeration</h1>
            <form className='min-w-md' onSubmit={handleCreateDevice}>
            <div className='flex-col mb-5'>
                    <FormSelectElement id="device" label="Device Model" value={selectedDevice} options={deviceType} setFunc={setSelectedDevice} defaultValue='Device Name'/>
                    <FormSelectElement id="modelnum" label="Model Number" value={selectedModelnum} options={modelnum} setFunc={setSelectedModelnum} defaultValue='Model number'/>
                    <FormSelectElement id="serviceLoc" label='Location' value={selectedServiceLoc}  options={serviceLocs.map((serviceLocs => `${serviceLocs.serviceid}-${serviceLocs.street}`))} setFunc={setSelectedServiceLoc} defaultValue="Service Location"/>
                <div><button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Device</button></div>
                </div>
                {/* this will have the previous;y stored values in the databse about the devices */}

            </form>
        </div>
    )
}