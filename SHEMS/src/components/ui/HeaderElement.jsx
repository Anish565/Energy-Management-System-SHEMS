import { Link } from "react-router-dom";

import { useUserStore } from "../../stores/userStore"


export const HeaderElement = () => {
  const userStore = useUserStore()

  
  return (
    <>
    <header className="max-w-full bg-white dark:bg-gray-800 shadow py-4 mb-4">
      <div className="flex-row mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-lg font-semibold text-gray-700 dark:text-white">
          SHEMS
        </div>
        <nav className="flex items-center justify-end">
          <Link to="/" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Home</Link>
          { userStore.user ? <Link to="/graphs" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Graphs</Link> : null}
          { userStore.user ? <Link to="/deviceRegister" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Register Device</Link> : null}
          { userStore.user ? <Link to="/locationRegister" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Register Location</Link> : null}
          { userStore.user ? <Link to="/profile" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Profile</Link> : null}
       
        <div className="flex gap-4">
          {userStore.user ? <img class="w-10 h-10 rounded-full" src={`https://ui-avatars.com/api?name=${userStore.user.name}`} alt="Rounded avatar" /> : null}
          { userStore.user ? <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800" onClick={() => userStore.clearUser()} ><Link to="/login">Logout</Link></button>:  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800" ><Link to="/login">Login</Link></button>}
        </div>
        </nav>
      </div>
    </header>
    </>
  );
};
