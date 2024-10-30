import {useState} from "react";

function ToDoList() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        if (!toDo) {
            return;
        }
        setToDos(prev => [toDo, ...prev]);
        setToDo('');
    }
    const onChange = (e) => {
        setToDo(e.target.value);
    }
    const toClear = () => {
        setToDos([]);
    }
    return (
        <div>
            <h1>Your to do list ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Write your to do..." value={toDo} onChange={onChange}/>
                <button type="submit">Submit</button>
            </form>
            <hr/>
            <button onClick={toClear}>Clear</button>
            <ul>
                {toDos.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default ToDoList;
