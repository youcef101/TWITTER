import React, { useState } from 'react'
import styled from 'styled-components'
import Post from './Post'

function Posts() {
    return (
        <Container>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
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