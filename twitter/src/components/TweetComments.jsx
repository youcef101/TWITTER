import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

function TweetComments({ setCommentModal, commentModal }) {
    return (
        <Container>
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
            <Comment setCommentModal={setCommentModal} commentModal={commentModal} />
        </Container>
    )
}

export default TweetComments
const Container = styled.div``