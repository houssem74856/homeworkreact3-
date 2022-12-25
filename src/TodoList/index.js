import Todos from '../Todos';
import './index.css';

function TodoList({listTitle,hala,next,previous}) {
    
    return (
        <div className="todolist">
            <h2>{listTitle}</h2>
            <Todos hala={hala} next={next} previous={previous}/>
        </div>
    )
}

export default TodoList;