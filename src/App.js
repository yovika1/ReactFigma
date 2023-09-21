import TestimonalsCard from './components/Cards/TestimonalsCard';
import Index  from './components/navbar/Index';
import Head from './components/Header/Head';
import Aboutme from './components/Aboutme/About';
import Ptfolio from './components/Myprotfolio/Prtfolio';
import Frm from './components/Form_cmpnt/Form';

import './index.css'
import Skillcard from './components/Cards1/Skillcard';
function App() {
  // const name = "My Name is ............";
  
  // const Ptfolio=[{name : "Yovi"},{name : "mande"},{name : "fghjop["}]
  return (
    <>
      <Index />
      <Head/>
      <div className='card1'>
      <Skillcard/>
      </div>
      <Aboutme/>
    <Ptfolio/>

      <index1/>  
      <TestimonalsCard/>
     <Frm/>
    </>
    
  );
}

export default App;
