import './App.css';
import TaskList from './TaskList';


//root function to display content
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>TODOLIST V2</legend>
          <TaskList />
        </fieldset>
      </header>
    </div>
  );  
}

export default App;
