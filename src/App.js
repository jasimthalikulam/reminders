import Header from './comp/Header'
import Tasks from './comp/Tasks'
import {useState} from 'react'
import AddTask from './comp/AddTask'
function App() {
  const[showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState(
    [{
        id:1,
        text:'doc appoint',
        day:'Sunday, 20th June',
        reminder : false 
    },
    {
        id:2 ,
        text:'buy stuff',
        day:'Monday, 16th June',
        reminder : true

    }
    ]
        )
        const addTask = (task)=>
        {
          const id = Math.floor(Math.random()*10000)+1
          const newTask = {id,...task}
          setTasks([...tasks,newTask])

        }
        const deleteTask = (id)=>
        {
          setTasks(tasks.filter((task)=>task.id!==id))
        }
        const toggleReminder=(id)=>
        {
          setTasks(tasks.map((task)=>task.id===id?{...task,reminder : !task.reminder }:task))
        }
  return (
    <div className='container'>
      <Header  onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}
      />
      {showAddTask&&<AddTask onAdd = {addTask}/> }
      {tasks.length>0?<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No tasks to be shown'}
    </div>
  )
}

export default App;
