import React, { useEffect } from 'react'
const Content = ({ fact, cards, makeVisible, divVisible }) => {
    
    useEffect(()=>{
        makeVisible(divVisible)
    },[fact])

    return(
        <div className='mw6 center overflow-y-auto overflow-x-hidden mt1 mb3' id='content'>
			{ cards }
		</div>
    )
}

export default Content