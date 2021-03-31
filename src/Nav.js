import React,{useContext} from 'react';
import {Moviecontext} from "./movieContext"
export default function Nav(){
  var [data]=useContext(Moviecontext);
   return(
      <div>
         <h1>DEV ED</h1>
         <p>number of movies available are {data.length}</p>
   </div>
   )
}