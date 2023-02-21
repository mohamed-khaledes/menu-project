import { Container } from 'react-bootstrap';
import './App.css';
import CardComponent from './Components/CardComponent';
import Category from './Components/Category';
import HeaderComponent from './Components/HeaderComponent';
import NavbarComponent from './Components/NavbarComponent';
import Data from './Data';
import { useState } from 'react';
import Landing from './Components/Landing';
function App() {
  const [cardData,setCardData] = useState(Data);
  // function for filtring data
  const filtring = (cat)=>{
    if(cat ==="الكل"){
      setCardData(Data)
    }else{
      const newData = Data.filter((card) => card.category === cat)
      setCardData(newData)
    }
  }
  // get all uniqe categoreis form the data
  const allCategories =["الكل",...new Set(Data.map((cat) => cat.category))]
  // filtring by serch
  const searchFilter = (word)=>{
    if(word !== ""){
      const searchData = Data.filter((card) => card.title === word)
      setCardData(searchData)
    }
  }
  return (
    <div className="App">
      <NavbarComponent searchFilter={searchFilter}></NavbarComponent>
      <Landing></Landing>
      <Container id='menu' className='custom-contianer'>
      <HeaderComponent></HeaderComponent>
      <Category filtring={filtring} allCategories={allCategories}></Category>
      <CardComponent cardData={cardData}></CardComponent>
      </Container>
    </div>
  );
}

export default App;
