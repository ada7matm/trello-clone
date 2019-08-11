import uuid from 'uuid/v4'

export default class Card {
    constructor(title, columnId){
        this.id = uuid()
        this.columnId = columnId
        this.title = title
        this.tags = []
    }
}
