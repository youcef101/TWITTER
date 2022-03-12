import React from 'react'
import styled from 'styled-components'
import LeftBar from '../components/LeftBar'
import ProfilePage from '../components/ProfilePage'
import RightBar from '../components/RightBar'

function Profile() {

    return (
        <Container>
            <LeftBar />
            <ProfilePage />
            <RightBar />

        </Container>
    )
}

export default Profile
const Container = styled.div`
flex:5;
display:flex;
//overflow-x:hidden;
`