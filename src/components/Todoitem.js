import React from "react";

export default function Todoitem({todo,ondelete}) {
    const style = { height : 130 ,
        width :750  
    }
  return (
    <div>
      <div className="card container my-3" style={style}>
        <div className="card-body">
          <h5 className="card-title" >{todo.title}</h5>
          <p className="card-text">
          {todo.desciption}
          </p>
          <button type="button" className="btn btn-primary" onClick={() => ondelete(todo)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
