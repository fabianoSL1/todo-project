import { useState } from "react";

const NewTodo = ({handleAdd}) => {
  const [value, setValue] = useState('')

  const handleValue = (e) => setValue(e.target.value)

  const handleButton = () => {
    handleAdd(value)
  }

  return (
      <div className='mt-3 flex gap-3 items-stretch'>
        <input value={value} onChange={handleValue} type='text' placeholder='add details' className='border border-gray-300 px-2 py-2 rounded-xl flex-grow-1 w-full' />
        <button onClick={handleButton} className='capitalize bg-blue-500 text-white text-sm font-semibold px-8 rounded-xl'>add</button>
      </div>
  )
}

export default NewTodo;