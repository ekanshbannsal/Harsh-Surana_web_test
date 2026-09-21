import React,{useState} from 'react'
import ClubData from './Data/ClubData'
import ClubCard from './components/ClubCard'
function App() {
  const [books,setbooks] = useState(ClubData);

  function handleToggle(id){
 const update = 
    books.map((Element)=>{
      if(Element.id === id){
        return {...Element,}
      }
      return {Element}
    });
    setbooks(update);
  }
  
 

  const total = books.length;
  const avaliablebooks = books.filter((Element)=> Element.joined === true).length;
  const issuedbooks = books.filter((Element)=> Element.joined === false).length;

  
  let notavaliablemsg ;
  if(avaliablebooks === 0){
    notavaliablemsg = <h2>Books are not avaliable</h2>
  }
  return (
    <div>
    <h1>Club Dashboard</h1>

    
    <div>
      <h3>Total Clubs :{total}</h3>
      <h3> Active Members :{avaliablebooks}</h3>
      <h3> Non Active Members :{issuedbooks}</h3>
    </div>
 
 {notavaliablemsg}

 <div>
  {
    books.map((Element)=>{
      <ClubCard
      />
    })
  }
 </div>



    </div>
  )
}

export default App