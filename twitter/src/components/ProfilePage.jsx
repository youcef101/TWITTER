import React from 'react'
import styled from 'styled-components'
import ProfileInfos from './ProfileInfos'
import ProfileNav from './ProfileNav'
import Posts from './Posts'
function ProfilePage() {
    return (
        <Container>
            <ProfileNav />
            <ProfileInfos />
            <Posts />
        </Container>
    )
}

export default ProfilePage
const Container = styled.div`
flex:2;
`