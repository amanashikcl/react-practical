import { useEffect } from "react";


function Albums(){
    useEffect(()=>{
            fetchAlbums();
    
            return()=>{
                console.log('unmount');
            }
        },[])
        const fetchAlbums = () =>{
             fetch("https://jsonplaceholder.typicode.com/albums")
            .then((res)=>res.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err))
    
            }
    return (
        <>
        
        </>
    )
}

export default Albums