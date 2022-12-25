import { useDispatch, useSelector } from "react-redux";
import { nextt,previouss } from '../redux/features/todosSlice'
import "./index.css";

function Todos({hala,previous,next}) {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
    
    const todosMod = todos.filter((todo) => todo.hala === hala)
    
    return (
        todosMod.map(todo => {
        return (
            <div className='todo'>
                {todo.tag === 'work' &&<div className='color-work'></div>}
                {todo.tag === 'study' &&<div className='color-study'></div>}
                {todo.tag === 'hobby' &&<div className='color-hobby'></div>}
                <h3 className='todotitle'>{todo.title}</h3> 
                <p className='tododescription'>{todo.description}</p> 
                <div className="dateBtns">
                    <p className="date">{todo.date}</p>   
                    {previous && <button className="previous" onClick={() => dispatch(previouss({id:todo.id}))}>Previous</button>}
                    {next && <button className="next" onClick={() => dispatch(nextt({id:todo.id}))}>Next</button>}
                </div>  
            </div>
        )
    })
    
    )
}

export default Todos