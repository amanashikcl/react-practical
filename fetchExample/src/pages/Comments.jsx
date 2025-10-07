import { useEffect } from "react";

function Comments(){
    useEffect(()=>{
            fetchComments();
    
            return()=>{
                console.log('unmount');
            }
        },[])
        const fetchComments = () =>{
             fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res)=>res.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err))
    
            }
    return (
        <>
        
        </>
    )
}

export default Comments