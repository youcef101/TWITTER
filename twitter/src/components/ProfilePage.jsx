import React from 'react'
import styled from 'styled-components'
import ProfileInfos from './ProfileInfos'
import ProfileNav from './ProfileNav'
import Posts from './Posts'
function ProfilePage({ setEditModal, editModal, setCommentModal, commentModal }) {
    return (
        <Container>
            <ProfileNav />
            <ProfileInfos setEditModal={setEditModal} editModal={editModal} />
            <Posts commentModal={commentModal} setCommentModal={setCommentModal} />
        </Container>
    )
}

export default ProfilePage
const Container = styled.div`
flex:2;
`