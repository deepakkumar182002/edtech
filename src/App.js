import './App.css';
import Carousel from './components/Carousel';
import Navigation from './components/Navigation';


function App() {
  // console.log(process.env.REACT_APP_MY_API)
  return (
    <>
      {/* <div className="container"> */}
      <h1>value:{process.env.REACT_APP_MY_API}</h1>
        <Navigation />
        <Carousel />
        
      {/* </div> */}
    </>
  );
}

export default App;
