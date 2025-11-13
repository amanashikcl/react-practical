import React, { useEffect, useState } from 'react'

function About() {
  const [Count,Setcount] = useState(0)
  useEffect(() => {
    console.log("About page loaded");
    return () => {
      console.log("About page unloaded");
    }
  }, [Count])
  return (
    <h1>About  {Count} <button onClick={() => Setcount(Count + 1)}>+</button></h1>
  )
}

export default About