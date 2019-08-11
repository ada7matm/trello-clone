import React from 'react'
import Comment from 'components/Comment/Comment'

const CommentList = ({comments}) => (
    comments.map(comment =>
        <Comment 
            key={comment.id}
            id={comment.id}
            text={comment.text}
            username={comment.username}
        />    
    )
)

export default CommentList