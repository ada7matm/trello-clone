import React from 'react'
import Column from 'models/Column'

const ColumnContext = React.createContext()

class ColumnProvider extends React.Component {
    state = {
        columns: []
    }
    addColumn = title => {
        this.setState({ columns: [...this.state.columns, new Column(title)]})
    }
    render(){
        return (
            <ColumnContext.Provider
            value={{
                columns: this.state.columns,
                addColumn: this.addColumn
            }}
            >
                {this.props.children}
            </ColumnContext.Provider>
        )
    }
}

export const ColumnConsumer = ColumnContext.Consumer
export default ColumnProvider