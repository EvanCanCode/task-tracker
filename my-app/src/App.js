import React,{useState} from 'react';
import './App.css';
import {VscCircleSlash} from "react-icons/vsc";
import {VscCheck} from "react-icons/vsc";

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
            <p>Lorem ipsum dolor sit amet.</p>
            <div>
              <VscCircleSlash className='icon'/>
              <VscCheck className='check-icon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
