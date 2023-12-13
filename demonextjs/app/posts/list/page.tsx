import PostCard from '@/app/components/PostCard';
import React from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostsListPage = async () => {
    
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        //{ next: { revalidate: 10 } }
        {cache: 'no-cache'}
    )

    const posts: Post[] = await res.json()
    //console.log(posts) // console serveur

    return (
        <>
            <div>PostsListPage</div>
            {posts.splice(0,10).map((p, index) => <PostCard post={p} index={index+1} />)}
                
        </>
        
    )
}

export default PostsListPage