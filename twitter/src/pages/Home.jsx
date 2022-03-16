import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/home/LeftBar'
import Middle from '../components/home/Middle'
import RightBar from '../components/home/RightBar'


function Home() {

    return (<Container>
        <LeftBar />
        <Middle />
        <RightBar />
    </Container>
    )
}

export default Home
const Container = styled.div`
//flex:5;
display:flex;
width:100%;
`