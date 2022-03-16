import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { axiosInstance } from '../../axios'
import { getCurrentUser, getUserFollowings } from '../../redux/apiCalls'

function FollowingsList({ following }) {
    const dispatch = useDispatch()
    const [isHover, setIsHover] = useState(false)
    const [isUnfollow, setIsUnfollow] = useState(false)
    const user = useSelector(state => state.user.current_user)
    const infos = useSelector(state => state.user.profileInfos)
    const UnfollowUser = async (id) => {
        const userId = {
            userId: user?._id
        }
        try {
            await axiosInstance.put(`/user/${id}/unfollow`, userId);
            setIsUnfollow(!isUnfollow)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        isUnfollow && getUserFollowings(infos?._id, dispatch)
    }, [infos?._id, dispatch, isUnfollow])

    useEffect(() => {
        isUnfollow && getCurrentUser(user?._id, dispatch)
    }, [user?._id, dispatch, isUnfollow])

    return (
        <Container>

            <FollowingsCard>
                <Top>
                    <NavLink to={`/user/${following?._id}`}>
                        <Left>
                            <UserImg>
                                <img src={following?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                            </UserImg>
                            <Infos>
                                <Username>{following?.fullname}</Username>
                                <Tag>@{following?.fullname.replace(/ /g, '_')}</Tag>
                            </Infos>
                        </Left>
                    </NavLink>
                    <Right>
                        {!isHover || user?._id === following?._id ?
                            <BtnContainer onMouseOver={() => setIsHover(true)}>
                                Abonné
                            </BtnContainer>
                            :
                            <BTNContainer onMouseLeave={() => setIsHover(false)} onClick={() => UnfollowUser(following?._id)}>
                                Se désabonner
                            </BTNContainer>
                        }

                    </Right>
                </Top>
                <Bottom>
                    <Bio>
                        hello all and thanks you ?
                    </Bio>
                </Bottom>

            </FollowingsCard>

        </Container>
    )
}

export default FollowingsList
const Container = styled.div`

`
const FollowingsCard = styled.div`
padding:10px 5px;
&:hover{
    background-color:#1a2633;
    cursor:pointer;
}
`
const Top = styled.div`
a{
    text-decoration:none;
    color:white;
};
display:flex;
justify-content:space-between;
`
const Left = styled.div`
display:flex;
align-items:center;
`
const Right = styled.div`
display:flex;
align-items:center;
`
const UserImg = styled.div`
display:flex;
align-items:center;
img{
    width:50px;
    height:50px;
    border-radius:50%;
}
`
const Infos = styled.div`
line-height:1.5;
margin-left:5px;

`
const Username = styled.div`
font-weight:700;
`

const Tag = styled.span`
color:gray;

`
const Bottom = styled.div``
const Bio = styled.div`
padding:5px 55px;
`

const BtnContainer = styled.div`
margin:0px 5px;
border:1px solid gray;
border-radius:30px;
color:white;
font-weight:600;
padding:5px 30px;
cursor:pointer;

`
const BTNContainer = styled(BtnContainer)`
color:red;
border:1px solid red;
background-color:rgba(255, 0, 0,0.1);

`

