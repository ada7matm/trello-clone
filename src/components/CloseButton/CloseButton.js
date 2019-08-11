import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './CloseButton.scss'

const CloseButton = ({onClose}) => (
    <FontAwesomeIcon icon={faTimes} className='close-button' onClick={onClose} />
)

export default CloseButton;
