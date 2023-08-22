import React, { Component } from 'react'

 function ListElements() {
    return (
        <>
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
              {/* dark <img src={img1} /> */}
            </li> <li>
              {/* <a href={link}>touch</a> */}
            </li>
          </ul>
        </nav>
        
        </>
    );
 }

 export default ListElements;