import React from 'react'
import Card from 'components/Card/Card'

const CardList = ({cards}) => (
    cards.map(card => <Card 
        key={card.id}
        id={card.id}
        title={card.title} 
        text={card.text}
        tags={card.tags}
        comments={card.comments}
    />)
)

export default CardList