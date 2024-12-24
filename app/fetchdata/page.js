'use client'

import { useState } from "react";

const DocsPage = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let response = fetch('http://localhost:3000/api/backend', {
      method: 'POST',
      body: {
       t: title 
      }
    })
  }
  return (
    <>
    <h1 className="text-3xl">Docs page</h1>
    
    <form onSubmit={handleSubmit}>
      <input className="border-2 " value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
      <button>submit</button>
    </form>
    
    
    
    </>
  )
}

export default DocsPage