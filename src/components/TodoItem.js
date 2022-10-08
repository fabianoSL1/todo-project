import { useState } from "react";
import { Trash } from "phosphor-react";

const TodoItem = ({text, initial, handleDelete}) => {
  const [complete, setComplete] = useState(initial)

  const handleCheck = () => {
    setComplete(!complete)
  }

  return(
    <div className="flex mx-3 mt-2 gap-3 items-center">
      <input type='checkbox' checked={complete} onClick={handleCheck}/>
      <label>{text}</label>
      {complete ? <Trash onClick={() => handleDelete(text)} size={24} className="ml-auto cursor-pointer hover:text-red-500"/> : <></>}
    </div>
  )
}

export default TodoItem;