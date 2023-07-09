import './styles.css'
// import Navbar from './components/Navbar';
// import Content from './components/Content';
// import Card from './components/Card';
// import Footer from "./components/Footer"
// import Data from "./data"
import { React, useState } from 'react';

function App() {

  // const asedata = Data.map((data)=>{

  //   return <Card
  //   key = {data.id}
  //   {...data} //spreads the property of an object
  //    />

  // })

  // const navData = useState("ASE TUP Taguig")
  // console.log(navData)

  const msg = useState("Is State in React Necessary???")

  const [answer, setAnswer] = useState("")

  function handleClick(){
    setAnswer("Yes of Course")
  }

  function nohandleClick(){
    setAnswer("No its not")
  }

  function clearhandleClick(){
    setAnswer("")
  }

  return (

    <div>

     <div className='state-container'>
      <h3>{msg}</h3>
      <h5>{answer}</h5>
      <button className='btn-state' onClick={handleClick}>Yes</button>
      <button className='btn-state' onClick={nohandleClick}>No</button>
      <button className='btn-state' onClick={clearhandleClick}>Clear</button>
     </div>
      {/* <Navbar title={navData}/>
      <Content/>
      <div className='card-content'>
        {asedata}
      </div>
      <Footer/> */}

    </div>

  );
  
}

export default App;
