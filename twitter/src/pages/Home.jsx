import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import Middle from '../components/Middle'
import RightBar from '../components/RightBar'
import Loading from '../components/Loading'

function Home() {
    //const { isFetching } = useSelector(state => state.user)
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