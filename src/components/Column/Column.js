import React from 'react'
import AddInputWithToggle from 'components/AddInputWithToggle/AddInputWithToggle'
import CardList from 'components/Lists/CardList/CardList'
import Card from 'models/Card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Column.scss'
import CardProvider, { CardConsumer } from 'components/Contexts/CardContext';

class Column extends React.Component {
    state = {
        cards: []
    }
    addCard = title => {
        this.setState({ cards: [...this.state.cards, new Card(title)]})
    }
    render(){
        const {title} = this.props
        return (
            <div className='column'>
                <p className='title'>{title}</p>
                <CardProvider>
                    <CardConsumer>
                        {
                            ({getCards, addCard}) => (
                                <>
                                    <CardList cards={getCards(this.props.id)} />
                                    <AddInputWithToggle 
                                        type='textarea'
                                        placeholder='Introduzca un título para esta tarjeta'
                                        buttonText='Añadir tarjeta'
                                        onAddValue={title => addCard(title, this.props.id)}
                                    >
                                        <div className='add-card-toggle'>
                                            <FontAwesomeIcon icon={faPlus} />
                                            Añada una tarjeta
                                        </div>
                                    </AddInputWithToggle>   
                                </>
                            )
                        }
                    </CardConsumer>
                </CardProvider>
            </div>
        )
    }
}

export default Column
