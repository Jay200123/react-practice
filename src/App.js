import './styles.css'
import Navbar from './components/Navbar';
import Content from './components/Content';
import Card from './components/Card';

//importing images
import img1 from "./images/focus.jpg"
import img2 from "./images/image2.jpg"
import img3 from "./images/industry.jpg"
import img4 from "./images/tech.jpg"
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <div className='card-content'>

      <Card
      images={img1}
      header="Practical Focus"
      text="Automotive courses typically have a strong practical component, emphasizing hands-on training and real-world application of knowledge. Students often work with actual vehicles, automotive systems, and tools to gain practical experience."
      />

      <Card
      images={img2}
      header="Specialized Areas"
      text="Automotive courses cover a broad range of topics related to automobiles, including automotive engineering, design, manufacturing, electronics, diagnostics, and maintenance."
      />

      <Card
      images={img3}
      header="Industry Relevant Skills"
      text="utomotive courses aim to develop skills that are in demand in the automotive industry. These may include problem-solving, critical thinking, technical skills, communication, teamwork, and project management."
      />

      <Card
      images={img4}
      header="Technological Advancements"
      text="Automotive technology is continuously evolving, driven by advancements in areas such as electric vehicles, autonomous driving, connected cars, and alternative fuels."
      />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
