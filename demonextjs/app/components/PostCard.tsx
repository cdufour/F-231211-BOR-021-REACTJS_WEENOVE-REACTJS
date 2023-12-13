import React from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
}

type Props = {
    post: Post
    index: number
}

const PostCard = (props: Props) => {
    const { title, body } = props.post
    return (
        <div style={{marginBottom: 10}}>
            <h3>#{props.index} {title}</h3>
            <p>{body}</p>
        </div>
  )
}

export default PostCard