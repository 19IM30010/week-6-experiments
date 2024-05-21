import {useState,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle] = useState("My name is G1");

  


  return (
    <>
      <button style={{margin:10}} onClick={()=>{
        setTitle("My Name is "+Math.random().toString(10));
      }}>click me to change the title</button>
      <Header title={title}></Header>
      <Header title="My name is G2"></Header>
    </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App;
