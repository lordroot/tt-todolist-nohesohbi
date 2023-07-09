import React, {useState} from 'react'
import TaskList from './TaskList'

interface taskStruct
{

    id: number
    title: string
    completed: boolean

}

const TaskItem: React.FC<taskStruct> = ({ id, title, completed }) => {

  const [taskState, setTaskState] = useState<boolean>(completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setTaskState(event.target.checked);

  }

  return (

    <>
      <li>
        <input type="checkbox" id={id.toString()} name={id.toString()} checked={taskState} onChange={handleChange}/>

        <label htmlFor={id.toString()}>{title}</label>
      </li>
    </>

  )

};

export default TaskItem;