import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import Middle from '../components/Middle'
import RightBar from '../components/RightBar'
function Home() {
    return (
        <Container>
            <LeftBar />
            <Middle />
            <RightBar />
        </Container>
    )
}

export default Home
const Container = styled.div`
flex:5;
display:flex;
/* overflow:scroll;
::-webkit-scrollbar {
  width: 0px;
  
};
::-webkit-scrollbar-thumb {
 display:none
}  */
`