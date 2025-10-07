import { useEffect } from "react";

function Photos(){
    useEffect(()=>{
            fetchPhotos();
    
            return()=>{
                console.log('unmount');
            }
        },[])
        const fetchPhotos = () =>{
             fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res)=>res.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err))
    
            }
    return (
        <>
        
        </>
    )
}

export default Photos