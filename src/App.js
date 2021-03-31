import React, { useEffect,useState } from 'react';
import Recipe from "./recipe";
import "./App.css";
function App() {
 let APP_ID="6f4e7a8c";
 let APP_KEY="3f7991425bbeb9fcd12f1f11ae6a75fa";

  let [rec,updateRec]=useState([]);
  let [search,setSearch]=useState("");
  let [query,updateQuery]=useState("chicken");
  let URL=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  function handle(e){
    e.preventDefault();
    updateQuery(search);
    setSearch("");
  }
useEffect(()=>{
getRec();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[query])
 const  getRec=async()=>{
   const response=await fetch(URL);
   const data=await response.json();
   updateRec(data.hits);
 }
 return(
   <div className='form-container'>
     <form className='search-form' onSubmit={handle}>
      <div className="a">
      <div className="input">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            <button type="submit" >search</button>
       </div>
      </div>
      <h2 style={{color:"black",textAlign:'center'}}>RECIPE APP</h2>
      
        {rec.map(val=>
        <Recipe 
          key={val.recipe.calories}
          title={val.recipe.label}
          calories={val.recipe.calories}
          image={val.recipe.image}
          ingredients={val.recipe.ingredients}
          ></Recipe>)} 
     </form>
   </div>
 )
}
export default App;
