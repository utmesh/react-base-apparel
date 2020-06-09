import React from 'react';
import './Styles/App.css';
import Card from './Card';

import hero from './Images/hero-desktop.jpg'
import logo from './Images/logo.svg'
import iconArrow from './Images/icon-arrow.svg'


const line = `Hello fellow shoppers! We\'re currently building our new \n
fashion store. Add your email below to stay up-to-date with \n
announcements and our launch deals`
const lineSplitted = line.split('\n').map(i =>{
return<p>{i}</p>
})

function App() {
  return (
    <div className='Card'>
      <Card logo={logo} info={lineSplitted} icon={iconArrow} name={hero}/>
    </div>
  );
}

export default App;
