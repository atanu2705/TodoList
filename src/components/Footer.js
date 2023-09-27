import React from 'react'

export default function Footer() {
    let style = {
        position : "relative",
        top : "35vh",
        width : "100%" 
    }
  return (
    <div className='bg-dark text-light' style={style}>
      <p className='text-center'>
        Copyright &copy; MyToDoList.com
      </p>
    </div>
  )
}
