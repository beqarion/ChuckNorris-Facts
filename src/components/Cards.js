import React from 'react'
import Card from './Card'

const Cards = ({ fact }) => {
	const cards = []
	if (fact?.total > 0) {
		fact.result.forEach( el => cards.push(<Card key={el.id} fact={el} />))
	} else if (fact.total === 0){
		
	} else {
		cards.push(<Card key={fact.id}fact={fact} />)
	}
	return (
		<div className='overflow-y-auto overflow-x-hidden mt1 mb3' id='container'>
			{ cards }
		</div>
	)
}

export default Cards