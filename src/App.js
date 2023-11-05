import './App.css';
import ToDoRowItem from './components/ToDoRowItem';
import ToDoTable from './components/ToDoTable';



function App() {

  const todos = [
    { id: 1, description: 'Wakeup at 4:30', assigned: "Udhaya" },
    { id: 2, description: 'Excercise till 5:30', assigned: "Prakash" },
    { id: 3, description: 'Walking till 7:00', assigned: "Prakash" }
  ]

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className='card-header'>
          <h3>My TO-DOs</h3>
        </div>
        <div className='card-body'>
          <ToDoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
