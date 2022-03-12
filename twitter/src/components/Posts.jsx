import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Post from './Post'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';


function Posts({ tweets, setIsLiked, isLiked }) {
    //const scrollRef = useRef()
    const { isFetching } = useSelector(state => state.tweet)

    /* useEffect(() => {
        //scrollRef.current = window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollRef.current?.scrollIntoView({ top: 0, behavior: 'smooth' })
    }, [tweets]) */

    return (<>
        {isFetching ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                <CircularProgress color='inherit' size='30px' value={50} />
            </div>
            :
            <Container>
                {tweets &&
                    tweets.map(tweet =>
                        <div key={Math.random()} /* ref={scrollRef} */>
                            <Post tweet={tweet} setIsLiked={setIsLiked} isLiked={isLiked} />
                        </div>
                    )}

            </Container>
        }</>
    )
}

export default Posts
const Container = styled.div`
`