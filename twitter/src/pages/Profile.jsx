import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import EditProfileModal from '../components/EditProfileModal'
import LeftBar from '../components/LeftBar'
import ProfilePage from '../components/ProfilePage'
import RightBar from '../components/RightBar'

function Profile({ setCommentModal, commentModal }) {
    const [editModal, setEditModal] = useState(false)
    return (
        <Container>
            <LeftBar />
            <ProfilePage setEditModal={setEditModal} editModal={editModal} commentModal={commentModal} setCommentModal={setCommentModal} />
            <RightBar />
            {editModal &&
                <EditProfileModal setEditModal={setEditModal} />
            }
        </Container>
    )
}

export default Profile
const Container = styled.div`
flex:5;
display:flex;
`