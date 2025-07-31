import { useState } from 'react';
import './style.css';

function ToDoItem({data, updateList}){

    function del(item){
        const newList = data.filter((i)=> i != item );
        updateList(newList);
        // console.log(newVal);
        // console.log(item);
    }

    function isCheck(index){
        const newList = data.map((item,i) =>{
            if(i === index){
                alert("hurray task is completed!");
                return {...item, complete : !item.complete };
            }
            return item;
        });
        updateList(newList);
    }

    function edit(index){
        const dataind = data[index];

        if(dataind.complete){
            alert("task is already marked");
            return item;
        }

        const newtxt = prompt("Edit the task");
        const editText = data.map((item, i)=>{
        if(i === index){
            return {...item, text : newtxt};
        }
            return item;
        });
        updateList(editText);
    }

    return(
        <>
        {
            data.map((data,index)=>{
                return(
                    <div key={index} className="todo-container">
                        <div className='todo'>
                            <div className='todo-content'>
                            {!data.complete ? <p className="todo-items">{data.text}</p> : <strike><p className="todo-items">{data.text}</p></strike>}
                            </div>
                            <div className='todo-btn'>
                            <button className="btn edit" onClick={()=>edit(index)}><span className='btn-txt' >Edit</span><i class="fa-solid fa-pen-to-square"></i></button>
                            <button className="btn mark" onClick={()=>isCheck(index)}><span className='btn-txt' >Mark</span><i class="fa-solid fa-check"></i></button>
                            <button className="btn del" onClick={()=>del(data)}><span className='btn-txt' >Delete</span><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </>
    );
}

export default ToDoItem;