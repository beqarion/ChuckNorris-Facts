import React from 'react'
import Card from './Card'
import Content from '../containers/Content'

const Cards = ({ fact, makeVisible, divVisible }) => {
	const cards = []
	if (fact?.total > 0) {
		fact.result.forEach( el => cards.push(<Card key={el.id} fact={el} />))
	} else if (fact.total === 0){
		
	} else {
		cards.push(<Card key={fact.id} fact={fact} />)
	}
	return (
		<Content fact={fact} cards={cards} makeVisible={makeVisible}  divVisible={divVisible} />
	)
}

export default Cards