import { useEffect} from "react"

function Posts(){
    useEffect(()=>{
        fetchPosts();

        return()=>{
            console.log('unmount');
        }
    },[])
    const fetchPosts = () =>{
         fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data) => console.log(data))
        .catch((err)=>console.log(err))

        }

    return (
        <>

        </>
    )
}

export default Posts