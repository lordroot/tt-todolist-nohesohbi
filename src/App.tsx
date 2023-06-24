import React, {useState} from 'react';
import './App.css';
import { useFetch } from './custom-hook/useFetch'

const url = `https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks`

// Interface for data retrieved from API
interface TaskItem 
{
  id: number
  title: string
  completed: boolean
}

// Output each element from the todolist & handle status change
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
      <input type="checkbox" id={taskState.id.toString()} name={taskState.title} checked={taskState.completed} onChange={handleChange}/>
      <label htmlFor={taskState.id.toString()}>{taskState.title}</label>
    </div>
  );
}

// Fetch tasks from the API & call TaskItem to display them.
function TaskList() 
{
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
                    (task) => <TaskItem task={task}/>
                )
            }
        </>
    )
}

//root function to display content
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
