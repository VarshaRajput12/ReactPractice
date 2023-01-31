import './App.css';
// import Card from './Card';
// import Calculations from './Calculations';
import './index.css';
// import App from './App';
import Emoji from './Emoji';
// import CurrTimeDate from './Practice';
// import obj from "./object";


function App() {
  // function allCards(ele){
  //   return (
  //     <Card key={ele.id} imgSrc={ele.imgSrc} title={ele.title} link={ele.link} />
  //   );
  // }
  
  return (
    <>
      <Emoji />
      {/* <CurrTimeDate /> */}
      {/* <Calculations/> */}

      {/* we dont have to use that com again and again we can use map */}
      {/* <Card imgSrc={obj[0].imgSrc} title={obj[0].title} link={obj[0].link} />
      <Card imgSrc={obj[1].imgSrc} title={obj[1].title} link={obj[1].link} />
      <Card imgSrc={obj[2].imgSrc} title={obj[2].title} link={obj[2].link} /> */}
      {/* {obj.map(allCards)} */}
    </>
  );
}

export default App;
