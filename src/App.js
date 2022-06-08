import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,

    },
    {
      id: 2,
      text: 'Walk Dog',
      day: 'Today',
      reminder: true,
    }
  ])
  return (
    <div className="container">
    <Header />
    <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
