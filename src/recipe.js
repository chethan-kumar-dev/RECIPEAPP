import React from 'react'

export default function Recipe({title,calories,image,ingredients}) {
  return (
   <div className="flex-cont">
      <div key={calories} className="div-ele">
      <h1>{title}</h1>
      <p>calories : {calories}</p>
      <h3>preparation</h3>
      <ul>
         {ingredients.map(ing=><li key={Math.random()}>{ing.text}</li>)}
      </ul>
      <img src={image} alt=''></img>
      <hr></hr>
    </div>
   </div>
   
  )
}
