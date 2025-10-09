import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

function About() {

  const[count, setCount] = useState(0);
  useEffect(()=>{
    console.log("mounted");

    return()=>{
      console.log('unmounted');
    }
  },[count])

  return (
    <>
    
    <header className="text-center fs-1 fw-bold">
      About Us
    </header>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <h1>Count {count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Add</button>

    
    </>
    
  );
}

export default About;
