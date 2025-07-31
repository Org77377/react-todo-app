import ToDoItem from "./ToDoItem";
import './style.css';

function ToDoList({data, updateList}) {
    return (
        <>
        <div className="container-main">
            <ToDoItem data={data} updateList={updateList}/>
        </div>
        </>
    );
}

export default ToDoList;