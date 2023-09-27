import React, { useState } from "react";
import Todoitem from "./Todoitem";
import Addtodo from "./Addtodo";

export default function Todolist() {
  const [items, setItems] = useState([
    
  ]);
  const ondelete = (todo) => {
    console.log("asd", todo);
    setItems(
      items.filter((e) => {
        return e !== todo;
      })
    );
  };
const todoadd = (title,desciption)=>{
    let id;
    if(items.length===0){
        id = 0
    }else{
    id = items[items.length-1].id + 1 ;
    }
    const mytodo = { 
        id : id,
        title : title,
        desciption : desciption
    }
    setItems([...items,mytodo]);
    console.log(mytodo)
}

  return (
    <>
    <Addtodo todoadd={todoadd}/>
    <br/>
    <div className="container my-3">
        <h4>Todo List</h4>
      {items.length === 0
        ? "No Todo is Available"
        : items.map((todo) => {
            return <Todoitem todo={todo} key={todo.id} ondelete={ondelete} />;
          })}
    </div>
    </>
  );
}
