import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../../stores/userStore"


export const HeaderElement = () => {
  const userStore = useUserStore()
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <>
    <header className="max-w-full bg-white dark:bg-gray-800 shadow py-4 mb-4">
      <div className="flex-row mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-lg font-semibold text-gray-700 dark:text-white">
        <Link to="/" href="#" className="text-gray-600 dark:text-gray-200 mx-3">SHEMS</Link>
        </div>
        <nav className="flex items-center justify-end">

          {/* { userStore.user ?  <Link to="/graphs/graph1" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Graph1</Link> : null}
          { userStore.user ?  <Link to="/graphs/graph2" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Graph2</Link> : null}
          { userStore.user ?  <Link to="/graphs/graph3" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Graph3</Link> : null}
          { userStore.user ?  <Link to="/graphs/graph4" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Graph4</Link> : null} */}
          {
            userStore.user ? 
            <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 dark:focus:ring-blue-600"
        id="dropdown-menu"
        onClick={toggleDropdown}
      >
        Graphs
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v12a1 1 0 01-1.553.832l-6-3a1 1 0 010-1.664l6-3a1 1 0 01.553-.168A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${
          dropdownOpen ? 'block' : 'hidden'
        } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <div className="py-1">
          {userStore.user && (
            <>
              <Link to="/graphs/graph1" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Graph1
              </Link>
              <Link to="/graphs/graph2" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Graph2
              </Link>
              <Link to="/graphs/graph3" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Graph3
              </Link>
              <Link to="/graphs/graph4" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Graph4
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
    : null
          }
          
          { userStore.user ? <Link to="/deviceRegister" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Register Device</Link> : null}
          { userStore.user ? <Link to="/locationRegister" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Register Location</Link> : null}
          { userStore.user ? <Link to="/manageService" href="#" className="text-gray-600 dark:text-gray-200 mx-3 hover:text-gray-500">Manage Service Location</Link> : null}
        
        <div className="flex gap-4">
          {userStore.user ? <Link to="/profile"><img class="w-10 h-10 rounded-full" src={`https://ui-avatars.com/api?name=${userStore.user.name}`} alt="Rounded avatar" /></Link> : null}
          { userStore.user ? <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800" onClick={() => userStore.clearUser()} ><Link to="/login">Logout</Link></button>:  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800" ><Link to="/login">Login</Link></button>}
        </div>
        </nav>
      </div>
    </header>
    </>
  );
};
