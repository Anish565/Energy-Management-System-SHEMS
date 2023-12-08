export const FormTextElement = ({ type, placeholder, id, label, d1="", d2="" }) => {
  return (
    <>
        <div className="mb-5">
            {label ? <label htmlFor={id} className="block text-3xl mb-2  text-gray-600 dark:text-gray-400">{label}</label> : null}
        </div>
        <div className="relative my-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d={d1}/>
                <path d={d2}/>
            </svg>
            </div>
            <input type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}/>
        </div>
    </>
  );
}

