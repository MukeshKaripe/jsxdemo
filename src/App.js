import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Heading from './component/header';
import ListElements from './component/listelements';
import {add,sub,div} from './component/calculator';
import { Card } from './component/netflixtopseries/header';

// function App() {
//   const img1="htttp:/google.com/photos"
//   const link = "ww.google.com";
//   const fname ='karipe d';
//   const lname ='karipe--d';
//   const [currentTime, setCurrentTime] = useState(new Date());
// // let CurrentUpdate = new Date(2023, 16,2,20);
// let CurrentUpdate = new Date();

// CurrentUpdate=CurrentUpdate.getHours();

// function wishesMethod(params) {
// let wishes = '';
//   let colorApply ={
   


//   }

//   if( CurrentUpdate >=1 && CurrentUpdate <12 ){
//     wishes='Good Morning';


//   }
//   else if(CurrentUpdate >=12 && CurrentUpdate < 17 )
//   {
//     wishes='Good Afternoon';
// // {{color:'green'}};
// colorApply.color = 'blue' ;

//   }
//   else 
//   {
//     wishes='Good evening';

//   }
//   return wishes;
  
// }


// // console.log(wishesMethod());

// // function timeCalculate(CurrentUpdate) {
// //   if( CurrentUpdate <  )
  
// // }

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setCurrentTime(new Date());
//   //   }, 1000); // Update every second

//   //   return () => {
//   //     clearInterval(interval); // Clear the interval when the component unmounts
//   //   };
//   // }, []);

//   return (
//     <div className="App">

//     <Heading/>
//     {/* <ArrowCal/> */}

//       {/* <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header> */}
//       <h2> {fname + '  ' + lname} anil currrent {currentTime.toLocaleString()} </h2>
      
//       <p> loremp

//       </p>
//       <nav>
//             color: 'red', fontSize: '54px',
//             textAlign: 'center',
//             textShadow: '0px 2px 4px #ffe9c5',
//             fontFamily: `'Josefin Sans', sans-serif`,


//           }}
//         >
//           <li>
//             dark
//           </li>
//           <li>
//             dark
//           </li>
//           <li>
//             dark
//           </li>
//           <li>
//             dark
//           </li>
//           <li>
//             dark
//           </li> <li>
//             dark <img src={img1} />
//           </li> <li>
//             <a href={link}>touch</a>
//           </li>
//         </ul>
//       </nav>
//     <ListElements/>
//       <h1>Helloo sir, {wishesMethod()} </h1>
//       <p>
//         subtraction of two number {sub(20,40)}
//         sum of two numbers {add(20,200)}
//       </p>
//       <div>div of two numbers with limit four decimals {div(100,5)} </div>
//       {/* <Card 
//     imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkfiNj3QawtRAGH5bPNWWLHS3DXprv_647w&usqp=CAU"
//    type="data" 
//     title="A netflix original movie"
//    sname="dark" 
//    /> */}
//          <Card 
//     imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkfiNj3QawtRAGH5bPNWWLHS3DXprv_647w&usqp=CAU"
//    type="data" 
//     title="A netflix original movie"
//    sname="dark" 
//    />
   
//     </div>
    
//   );
// }

const Slot = (props) => {
  // let x = 1;
  // var b = 1;
  // var r = 1;


  // let x = props.x;
  // let b = props.b;
  // let r = props.r;

  // destructuring importantssss
  let {x,b,r} = props;
  if( x===b && b===r ){
return (<>
<div className='slot-inner' >
<h1> {x} : {props.b} : {props.r} </h1>
<span>
  you got
</span>

</div>
</>);


  }
  else {
    return (<>
      <div className='slot-inner' >
      <h1> {x} : {b} : {r} </h1>
      <span>
       wrongg
      </span>
      
      </div>
      </>);

  }



}

// const App = () =>{
//   return <>

//   <h1>🎰 welcome to <label style={{ fontWeight:'bold' , fontSize:'28px' }} >slot-machine game </label> </h1>
//   <Slot x='2' b='1' r = '1' />
 

//   <Slot x='1' b='1' r = '1' />
 
//   </>
// }

const App = () =>{

  // array destructuing
const name = ['anil','mukesh','you  r nothing'];


const [name1 ,name2,name3] = name;

// name[0];

// name1

const onSubmit = ()=>{

  setDEF(dataRef);
  return({

  })

}
  const HookState = useState();
  
  let newTime = new Date().toLocaleTimeString();


  // const [count , setCount]= useState(1);
  const [CurrentTime,SetTime] = useState(newTime);

  const Time = () =>{
 const CurrentTime =   new Date().toLocaleTimeString();
    // console.log(CurrentTime);
    SetTime(CurrentTime );

  }
  setInterval(Time,1000);

// console.log(HookState); //array of length 2 and order 1
// let count = 0;

const Incriment=() => {
  // setCount (count + 1);
// console.log('clicked ' + count++);
};

const Refname = 'click me';
const [nameref,setref] = useState(Refname);


const purple= '#8e44ad';

const [bg,setBg] = useState(purple);
let [count,setCount] = useState(0);

const handleColorword = () =>{
  if(count === 1){
    setBg('blue');
setref('time to learn');

  }
  else if(count === 2){
    setBg('black');
setref('ready to ');
  }
 else{
  setBg('orange');
  setref('ready to ');
  console.log('else part');
 }
}
const eventHandlingbgchange = (e) =>{
e.preventDefault();
  // console.log('eventHandlingbgchange is working');
  //  count = count++;
// setBg('yellow');
// setref('learn ');
setCount(count + 1);
console.log(count);
handleColorword();

// hardwork pays off

}
const [dataRef,setDEF] = useState('fd');
const inputEvent = (event) =>{
console.log(event.target.value,'c','ok');
 let dataRefO = event.target.value;

 setDEF(dataRefO);
//  return dataRefO;
} 



  return (
    <>
    <div>
       {/* {count} */}
    </div>
<button onClick={Incriment} className='' >click me </button>
  
<div className='background-div' style={{ background: bg,  }} >
       {/* {CurrentTime} */}
  
<button onClick={eventHandlingbgchange}  className='' >{nameref}</button>
  {/* onClick={Time} */}
<form>
</form>
<p>hello </p>
<div> { dataRef } </div>
  <input type='text' placeholder='name' onChange={inputEvent} ></input>
<input type='password' placeholder='password line'  ></input>
<button onClick={onSubmit} > click me </button>

  </div></>
  );
}

export default App;
