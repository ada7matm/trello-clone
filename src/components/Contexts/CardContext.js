import React from 'react'
import Card from 'models/Card'

const CardContext = React.createContext()

class CardProvider extends React.Component {
    state = {
        cards: []
    }
    addCard = (title, columnId) => {
        this.setState({ cards: [...this.state.cards, new Card(title, columnId)]})
    }
    getCards = columnId => ( 
        this.state.cards.filter(card => card.columnId === columnId)
    )
    render(){
        return (
            <CardContext.Provider
            value={{
                cards: this.state.cards,
                addCard: this.addCard,
                getCards: this.getCards
            }}
            >
                {this.props.children}
            </CardContext.Provider>
        )
    }
}

export const CardConsumer = CardContext.Consumer
export default CardProvider