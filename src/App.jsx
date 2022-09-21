import { useState } from 'react'
import './App.css'
import quotes from "./json/quotes.json"
import colors from "./json/colors.json"
import QuoteBox from './QuoteBox'


function App() {

  //Función randomizadora:
  const arrayRandomIndex = (array) => array[parseInt(Math.random()*array.length)]
  const firstQuote = arrayRandomIndex(quotes)
  const firstColor = arrayRandomIndex(colors)
  // console.log(firstQuote);
  // console.log(firstColor);

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)
  
  const handleRandom = () => {
    setRandomQuote(arrayRandomIndex(quotes));
    setRandomColor(arrayRandomIndex(colors))
  }
  const handleAnimation = () => {
    const btn = document.querySelector(".btn")
    btn.parentElement.classList.add("animation")
    setTimeout(() => {
      btn.parentElement.classList.remove("animation")
    }, 1000);
  }
  const handleEvery = () => {
    handleAnimation()
    setTimeout(() => {
      handleRandom()
    }, 500);
  }
  return (
    <div className="App" style={{backgroundColor: randomColor}}>
      <QuoteBox 
      randomQuote={randomQuote}
      randomColor={randomColor}
      handleEvery={handleEvery}
      />
    </div>
  )
}

export default App