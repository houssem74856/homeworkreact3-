import './App.css';
import AddNewTaskBtn from './AddNewTaskBtn';
import TodoList from './TodoList';

function App() {

  return (
    <div className="App">
      <AddNewTaskBtn />
      <div className='TodoLists'>
        <TodoList listTitle='To Do' hala={"todo"} next={true} previous={false}/>
        <TodoList listTitle='Currently Doing' hala={"currently"} next={true} previous={true}/>
        <TodoList listTitle='Completed' hala={"completed"} next={false} previous={true}/>
      </div>
    </div>
  );
}

export default App;
