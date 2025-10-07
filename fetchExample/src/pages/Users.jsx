import { useEffect } from "react";

function Users(){
    useEffect(()=>{
            fetchUsers();
    
            return()=>{
                console.log('unmount');
            }
        },[])
        const fetchUsers = () =>{
             fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err))
    
            }
    return (
        <>
        
        </>
    )
}

export default Users