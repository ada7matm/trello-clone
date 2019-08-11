import React from 'react'
import Column from 'components/Column/Column'

const ColumnList = ({columns}) => (
    columns.map(column => <Column 
        key={column.id}
        id={column.id}
        title={column.title}
        cards={column.cards}
    />)
)

export default ColumnList