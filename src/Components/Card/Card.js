import React from 'react';


export default function Card(post) {
    let content = post.is_Self;

    if (post.post_hint === 'image') {
        content = <div className='post-image'>
            <img src={post.url} alt='media preview' />
        </div>
    } else {
        return content;
    }

    return (
        <div className='card-container'>
            <div className='post-contents'>
                <h2>{post.title}</h2>
                {post.content}
            </div>
            <div className='card-bottom'>
                {/* <User /> */}
                {/* <PostTime /> */}
                <Comments />
            </div>
        </div>
    )
}