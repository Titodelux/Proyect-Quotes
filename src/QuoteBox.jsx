import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeLgAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import BtnCard from './BtnCard'

const QuoteBox = ({randomQuote, randomColor, handleEvery}) => {
    const btn = document.querySelector(".btn")
    
    return (
        <article className="cardBox" style={{color: randomColor}}>
            <header className='header'>
                <div className='icon'><FontAwesomeIcon icon={faQuoteLeft} /></div>
                <div className="quote">{randomQuote.quote}</div>
            </header>
            <div className="autor">{randomQuote.author}</div>
            <BtnCard 
                randomColor={randomColor}
                handleEvery={handleEvery}
            />
        </article>
    )
}

export default QuoteBox