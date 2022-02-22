import React from 'react'
import styled from 'styled-components'
import Post from './Post'

function Posts({ setCommentModal, commentModal }) {
    return (
        <Container>
            <Post setCommentModal={setCommentModal} commentModal={commentModal} />
            <Post setCommentModal={setCommentModal} commentModal={commentModal} />
            <Post setCommentModal={setCommentModal} commentModal={commentModal} />
            <Post setCommentModal={setCommentModal} commentModal={commentModal} />
            <Post setCommentModal={setCommentModal} commentModal={commentModal} />
        </Container>
    )
}

export default Posts
const Container = styled.div`
/* overflow:scroll;
::-webkit-scrollbar {
  width: 0px;
  
};
::-webkit-scrollbar-thumb {
 display:none
} */
`