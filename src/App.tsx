import React, {useState} from 'react';
import './App.css';
import TaskList from './TaskList'

function App() {
  const [taskItem, setTaskItem] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <TaskList />
      </header>
    </div>
  );
}

export default App;
