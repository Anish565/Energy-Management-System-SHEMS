export const FormSelectElement = ({  id, label, value, setFunc,defaultValue="Please choose an option", options=[] }) => {


  return (
    <>

        <div className="mb-5">
            {label ? <label htmlFor={id} className="block text-3xl mb-2  text-gray-600 dark:text-gray-400">{label}</label> : null}
        </div>
        <select className="relative my-4" value={value} onChange={(e) => setFunc(e.target.value)} >
          <option value="">{defaultValue}</option>
          {options ? options.map(( option) => {
            return <option key={option} value={option}>{option}</option>
          }): null}            
        </select>
    </>
  );
}

