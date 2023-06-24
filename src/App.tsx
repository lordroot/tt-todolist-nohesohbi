import React, {useState} from 'react';
import './App.css';
import { useFetch } from './custom-hook/useFetch'

const url = `https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks`

interface TaskItem 
{
  id: number
  title: string
  completed: boolean
}

function TaskItem({ task }: { task: TaskItem }) 
{
  const [taskState, setTaskState] = useState<TaskItem>(task);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskState((prevTaskState) => ({
      ...prevTaskState,
      completed: !prevTaskState.completed
    }));
  };

  return (
    <div>
      <input
        type="checkbox"
        id={taskState.id.toString()}
        name={taskState.title}
        checked={taskState.completed}
        onChange={handleChange}
      />
      <label htmlFor={taskState.id.toString()}>{taskState.title}</label>
    </div>
  );
}


function TaskList() 
{
    //const [taskItem, setTaskItem] = useState<TaskItem[]>([]); // { id: 0, title: '', completed: false }
    const { data, error } = useFetch<TaskItem[]>(url);

    if (error) {
        return (
            <p>An error occurred</p>
        )
    }

    if (!data) {
        return (
            <p>Loading data...</p>
        )
    }

    return (
        <>
            {
                data.map(
                    (task) => {return <TaskItem task={task}/>;}
                )
            }
        </>
    )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>All tasks to do :</legend>
          {TaskList()}
        </fieldset>
      </header>
    </div>
  );
}

export default App;
