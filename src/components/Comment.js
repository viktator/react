import React from 'react'

export default function Comment({comment}) {

    return (
        <div>
            <p>{comment.text} by {comment.user}</p>
        </div>
    )
}