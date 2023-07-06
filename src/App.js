import './styles.css'
import Navbar from './components/Navbar';
import Content from './components/Content';
import Card from './components/Card';
import Footer from "./components/Footer"
import Data from "./data"

function App() {

  const asedata = Data.map((data)=>{

    return <Card

    key = {data.id}
    {...data} //spreads the property of an object

    //  header={data.header}
    //  text={data.text}
    //  images={data.images}

     />

  })

  return (
    <div>
      <Navbar/>
      <Content/>
      <div className='card-content'>
        {asedata}
      </div>
      <Footer/>
    </div>
  );
  
}

export default App;
