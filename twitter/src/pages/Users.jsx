import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import LeftBar from '../components/home/LeftBar'
import RightBar from '../components/home/RightBar'
import UsersStats from '../components/user_followers_followings/UsersStats'

function Users() {

    return (<>
        <Container>
            <LeftBar />
            <UsersStats />
            <RightBar />
        </Container>

    </>)
}

export default Users
const Container = styled.div`
display:flex;
width:100%;
`