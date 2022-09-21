import React from 'react'

const BtnCard = ({handleEvery, randomColor}) => {
    return (
        <button 
            onClick={handleEvery}
            className="btn" 
            style={{backgroundColor: randomColor, color: "white"}}>
                <p>&gt;</p>
        </button>
    )
}

export default BtnCard