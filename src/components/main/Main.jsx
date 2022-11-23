// import React, { useEffect, useState } from 'react'
// const About = () => {
//     const [value, setValue] = useState('');
    
//     useEffect(() => {
//         let txt = document.getElementById("input").value
//         console.log(txt)
//     })
//     return (
//     <section id="about">
//         <div>
//             <h1>Insert Raw Text</h1>
//         </div>
//         <div>
//             <textarea id="input" cols="30" rows="10" ></textarea>
//         </div>
//     </section>
//   )
// }

// export default About
import './main.css'
import {useState} from 'react';

const About = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    // 👇️ update textarea value
    setMessage(event.target.value);
    
  };

  const noSpace = (text) => {
    let regEx = new RegExp (' ', 'g')
    return text.replace(regEx, '')
  } 
  const format = () => {
    
    let arr = message.split('\n')
    let aux = []
    let count = 1
    let datAux
    let stData


    arr.forEach(element => {
        if(element !== '')
        if(count === 1){
            datAux = element
            stData = datAux.trim()
            count = 2
        }
        else if(count === 2) {
            aux.push(`(${stData}, ${element})`)
            console.log(noSpace(stData))
            count = 1
        }
    });
    setMessage(aux.join('\n'))

  }
  return (
    <>
    <div className="container contact__container">
    <div>
    <label htmlFor="message">Data</label>
      <textarea
        cols="50" rows="10"
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
      />
    </div>
    </div>
      <div className='bt'>
      <button className="btn btn-primary" onClick={format}>Format</button>
      </div>
      
    </>
  );
};

export default About;