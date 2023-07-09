import React, {useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';


//root function to display content
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>All tasks to do :</legend>
          
          <TaskList />
        </fieldset>
      </header>
    </div>
  );  
}

export default App;
