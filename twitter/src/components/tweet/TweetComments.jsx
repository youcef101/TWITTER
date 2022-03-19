import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getTweetComments } from '../../redux/apiCalls'
import Comment from '../comment/Comment'

function TweetComments({ setCommentModal, tweetId, tweet_user_infos }) {
    const dispatch = useDispatch()
    const tweet_comments = useSelector(state => state.comment.tweet_comments)
    useEffect(() => {
        getTweetComments(tweetId, dispatch)
    }, [tweetId, dispatch])
    return (
        <Container>
            {tweet_comments &&
                tweet_comments.map(comment =>
                    <Comment
                        key={Math.random()}
                        setCommentModal={setCommentModal}
                        comment={comment}
                        tweet_user_infos={tweet_user_infos}
                    />
                )}

        </Container>
    )
}

export default TweetComments
const Container = styled.div``