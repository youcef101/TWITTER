import MoreHoriz from '@material-ui/icons/MoreHoriz'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { axiosInstance } from '../../axios'
import { getCurrentUser, getUserFollowers, getUserFollowings, getUserSuggestions } from '../../redux/apiCalls'

function FollowersList({ follower }) {
    const dispatch = useDispatch()
    const infos = useSelector(state => state.user.profileInfos)
    const user = useSelector(state => state.user.current_user)
    const [isFollowers, setIsFollowers] = useState(false)

    const FollowUser = async (id) => {
        const userId = {
            userId: user?._id
        }
        try {
            await axiosInstance.put(`/user/${id}/follow`, userId);
            setIsFollowers(!isFollowers)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        isFollowers && getUserSuggestions(user?._id, dispatch)
    }, [user?._id, dispatch, isFollowers])

    useEffect(() => {
        isFollowers && getCurrentUser(user?._id, dispatch)
    }, [isFollowers])




    return (
        <Container>

            <FollowersCard>
                <Top>
                    <NavLink to={`/user/${follower?._id}`}>
                        <Left>
                            <UserImg>
                                <img src={follower?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                            </UserImg>
                            <Infos>
                                <Username>{follower?.fullname}</Username>
                                <Info>
                                    <Tag>@{follower?.fullname?.replace(/ /g, '_')}</Tag>
                                    <Status>Vous suit</Status>
                                </Info>
                            </Infos>
                        </Left>
                    </NavLink>
                    <Right>
                        {!user?.followings.includes(follower?._id) && user?._id !== follower?._id ?
                            <BtnContainer onClick={() => FollowUser(follower?._id)}>
                                Suivre
                            </BtnContainer>
                            :
                            <BTNContainer>
                                Abonné
                            </BTNContainer>
                        }
                        <Icon>
                            <MoreHoriz />
                        </Icon>
                    </Right>
                </Top>
                <Bottom>
                    <Bio>
                        hello all and thanks you ?
                    </Bio>
                </Bottom>

            </FollowersCard>

        </Container>
    )
}

export default FollowersList
const Container = styled.div`

`
const FollowersCard = styled.div`
padding:10px 5px;
&:hover{
    background-color:#1a2633;
    cursor:pointer;
}
`
const Top = styled.div`
a{
    text-decoration:none;
    color:white
}
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
const Info = styled.div`
display:flex;
align-items:center;
`
const Tag = styled.span`
color:gray;

`
const Status = styled.div`
border-radius:4px;
color:gray;
margin-left:3px;
cursor:pointer;
background-color:#223344;
padding:0px 3px;
font-size:14px;
`
const Bottom = styled.div``
const Bio = styled.div`
padding:5px 15px;
`
const BtnContainer = styled.div`
margin:0px 5px;
background-color:white;
border-radius:30px;
color:black;
font-weight:600;
padding:5px 20px;
cursor:pointer;
&:hover{
  background-color:antiquewhite;  
}
`
const Icon = styled.div`
display:flex;
align-items:center;
cursor:pointer;
`
const BTNContainer = styled.div`
margin:0px 5px;
border:1px solid gray;
border-radius:30px;
color:white;
font-weight:600;
padding:5px 30px;
cursor:pointer;
`