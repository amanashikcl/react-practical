import { useEffect } from "react";

function Todos(){
    useEffect(()=>{
            fetchTodos();
    
            return()=>{
                console.log('unmount');
            }
        },[])
        const fetchTodos = () =>{
             fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>res.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err))
    
            }
    return (
        <>
        
        </>
    )
}

export default Todos