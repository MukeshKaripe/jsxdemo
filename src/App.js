import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Heading from './component/header';
import ListElements from './component/listelements';
import {add,sub,div} from './component/calculator';

function App() {
  const img1="htttp:/google.com/photos"
  const link = "ww.google.com";
  const fname ='karipe d';
  const lname ='karipe--d';
  const [currentTime, setCurrentTime] = useState(new Date());
// let CurrentUpdate = new Date(2023, 16,2,20);
let CurrentUpdate = new Date();

CurrentUpdate=CurrentUpdate.getHours();

function wishesMethod(params) {
let wishes = '';
  let colorApply ={
   


  }

  if( CurrentUpdate >=1 && CurrentUpdate <12 ){
    wishes='Good Morning';


  }
  else if(CurrentUpdate >=12 && CurrentUpdate < 17 )
  {
    wishes='Good Afternoon';
// {{color:'green'}};
colorApply.color = 'blue' ;

  }
  else 
  {
    wishes='Good evening';

  }
  return wishes;
  
}


// console.log(wishesMethod());

// function timeCalculate(CurrentUpdate) {
//   if( CurrentUpdate <  )
  
// }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="App">

    <Heading/>
    {/* <ArrowCal/> */}

      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}
      <h2> {fname + '  ' + lname} anil currrent {currentTime.toLocaleString()} </h2>
      
      <p> loremp

      </p>
      <nav>
        <ul className='unorder-listclassName'
          style={{
            color: 'red', fontSize: '54px',
            textAlign: 'center',
            textShadow: '0px 2px 4px #ffe9c5',
            fontFamily: `'Josefin Sans', sans-serif`,


          }}
        >
          <li>
            dark
          </li>
          <li>
            dark
          </li>
          <li>
            dark
          </li>
          <li>
            dark
          </li>
          <li>
            dark
          </li> <li>
            dark <img src={img1} />
          </li> <li>
            <a href={link}>touch</a>
          </li>
        </ul>
      </nav>
    <ListElements/>
      <h1>Helloo sir, {wishesMethod()} </h1>
      <p>
        subtraction of two number {sub(20,40)}
        sum of two numbers {add(20,200)}
      </p>
      <div>div of two numbers with limit four decimals {div(100,5)} </div>
    </div>
  );
}

export default App;
