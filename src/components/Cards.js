import Card from './Card'

const Cards = ({ fact }) => {
    const cards = []
    if (fact?.total > 0) {
        fact.result.forEach( el => cards.push(<Card key={el.id} fact={el} />))
    } else {
        return <Card fact={fact} />
    }
    return cards
}

export default Cards