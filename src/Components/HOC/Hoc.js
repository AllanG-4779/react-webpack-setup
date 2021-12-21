import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

const Hoc = (WrappedComponent, entity)=>{
    const  Enhanced = () =>{
        const [result, setResult] = useState([])
        const [search, setSearch] = useState("")
        const [error, setError] = useState("")

        useEffect(()=>{
         const fetchData = () => {
           axios
             .get("https://jsonplaceholder.typicode.com/"+entity+"/")
             .then((res) => {
               setResult(res.data);
             })
             .catch((e) => setError(e));
         };
         fetchData();
        },[])
        //based on the entity render appropriate result
      let searched = result.filter((result)=>{
        if (entity == "todos"){
          const {title} = result
          return title.toLowerCase().includes(search.toLowerCase())
        }
        if (entity == "users"){
          const {name} = result
         return name.toLowerCase().includes(search.toLowerCase());
        }
      })

        return (
          <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <WrappedComponent data={searched}></WrappedComponent>
          </div>
        );
      

    }  
    return Enhanced

}

export default Hoc