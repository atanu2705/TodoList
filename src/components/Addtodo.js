import React, { useState } from 'react'

export default function Addtodo(props) {
    const [title,setTitle] = useState("")
    const [desciption,setDesciption] = useState("")

    const submit= (e) => {
        e.preventDefault();
        if(!title || !desciption){
            alert("Fill all details to add your todo!!!!")
        }
        else{
        props.todoadd(title,desciption)}
    }
    
  return (
    <>
    <form className='container my-3' onSubmit={submit} >
    <h4 className='' >Add a ToDo</h4>
        <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="gottitle"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label><br/>
    <div className="col-sm-10">
      <input type="text" value={desciption} onChange={(e)=>setDesciption(e.target.value)} className="form-control" id="gotdescription"/>
    </div>
  </div>
    <button type="sumbit" className="btn btn-success">Add</button>
    </form>
    </>
  )
}
