import React from 'react';
import './App.css';

const CurrentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString();
const today = new Date(2020, 5, 2, 20).getHours();
let greet = ''
const cssStyle = { };

if(today > 1 && today < 11){
  greet= "Hello Sir, Good Morning"
  cssStyle.color = "green"
} else if(today >12 && today < 19){
  greet = "Hello Sir, Good AfterNoon"
  cssStyle.color = "yellow"
}else if(today > 19){
  greet= "Hello Sir, Good Night"
  cssStyle.color = "blue"
}


function App() {
  return (
    <div className="App">
      <h1>Hello {today}</h1>
  <p style = {cssStyle}>{greet}</p>
  <p>{CurrentDate}</p>
  <p>{CurrentTime}</p>
    </div>
  );
}

export default App;
