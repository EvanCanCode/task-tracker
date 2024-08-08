import React,{useState} from 'react';
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  
  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div className="task-wrapper">
        <div className="task-input">
          <div className='task-input-item'>
            <label>Task</label>
            <input type="text" placeholder="What's happening?"/>
          </div>

          <div className='task-input-item'>
            <label>Description</label>
            <input type="text" placeholder="What's happening?"/>
          </div>

          <div className='task-input-item'>
            <button type='button' className='primaryButton'>Add</button>
          </div>
        </div>

        <div className='button-area'>
          <button className={`secondaryButton ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Task</button>
          <button className={`secondaryButton ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className="task-list">
          <div className='task-list-item'>
            <h3>Task #1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
