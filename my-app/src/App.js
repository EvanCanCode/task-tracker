import React,{useState} from 'react';
import './App.css';
import {VscCircleSlash} from "react-icons/vsc";
import {VscCheck} from "react-icons/vsc";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const handdleAddTask = () => {
    let newTaskItem = {
      title:newTitle,
      description:newDescription
    }

    let updatedTaskArr = [...allTasks];
    updatedTaskArr.push(newTaskItem);
    setTasks(updatedTaskArr);
  }
  
  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div className="task-wrapper">
        <div className="task-input">
          <div className='task-input-item'>
            <label>Task</label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What's happening?"/>
          </div>

          <div className='task-input-item'>
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What's happening?"/>
          </div>

          <div className='task-input-item'>
            <button type='button' onClick={handdleAddTask} className='primaryButton'>Add</button>
          </div>
        </div>

        <div className='button-area'>
          <button className={`secondaryButton ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Task</button>
          <button className={`secondaryButton ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className="task-list">
          {allTasks.map((item, index) => {
            return(
              <div className='task-list-item' key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div>
                  <VscCircleSlash className='icon'/>
                  <VscCheck className='check-icon'/>
                </div>
              </div>
            )
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
