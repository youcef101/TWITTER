import React from 'react'
import styled from 'styled-components'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { NavLink } from 'react-router-dom';
import { axiosInstance } from '../../axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getUserFollowings, getUserSuggestions } from '../../redux/apiCalls';

function SuggestionCard({ suggest }) {
    const { isFetching } = useSelector(state => state.user)
    const user = useSelector(state => state.user.current_user)
    const [isFollow, setIsFollow] = useState(false)
    const [isSuivre, setIsSuivre] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsFollow(user?.followings.includes(suggest?._id))

    }, [user?.followings, suggest?._id])

    const FollowUser = async () => {
        setIsSuivre(true)
        const userId = {
            userId: user?._id
        }
        try {
            await axiosInstance.put(`/user/${suggest?._id}/follow`, userId);
            setIsFollow(!isFollow)
            //setIsSuivre(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUserSuggestions(user?._id, dispatch)
    }, [user?._id, dispatch, isFollow])

    useEffect(() => {
        isFollow && getUserFollowings(user?._id, dispatch)
    }, [user?._id, dispatch, isFollow])
    return (
        <Container>
            <Icon>
                <Close>
                    <CloseOutlinedIcon fontSize="small" />
                </Close>
            </Icon>
            <Card>
                <NavLink to={`/user/${suggest?._id}`}>
                    <UserImg>
                        <img src={suggest?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                    </UserImg>
                </NavLink>
                <Infos>
                    <Fullname> <NavLink to={`/user/${suggest?._id}`}>{suggest?.fullname}</NavLink></Fullname>
                    <Tag>@{suggest?.fullname.replace(/ /g, '_')}</Tag>
                </Infos>
                <Btn onClick={FollowUser}>suivre</Btn>
            </Card>
        </Container>
    )
}

export default SuggestionCard
const Container = styled.div`
border:0.5px solid gray;
border-radius:5px;
width:95%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Icon = styled.div`
width:100%;
display:flex;
justify-content:flex-end;
`
const Close = styled.div`
margin:3px 3px;
cursor:pointer;
`
const Card = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const UserImg = styled.div`
img{
    width:60px;
    height:60px;
    border-radius:50%;
    cursor:pointer;
}
`
const Infos = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:60%;
text-align:center;
margin-top:10px;
cursor:pointer;
`
const Fullname = styled.span`
a{
text-decoration:none;
color:white;
font-size:14px;
font-weight:600;
&:hover{
    text-decoration:underline;
}
}
`
const Tag = styled.span`
color:gray;
font-size:12px;
margin-top:5px;
`
const Btn = styled.div`
margin:10px 15px;
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