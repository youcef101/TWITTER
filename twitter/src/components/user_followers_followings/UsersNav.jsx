import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';




function UsersNav() {
    const { url } = useRouteMatch();
    const infos = useSelector(state => state.user.profileInfos)
    return (
        <Container>
            <Top>
                <Icon>
                    <Tooltip title="Verso" arrow>
                        <ArrowBackIcon fontSize='small' />
                    </Tooltip>
                </Icon>
                <Info>
                    <Username>{infos?.fullname}</Username>
                    <Tweet>150 tweet</Tweet>
                </Info>
            </Top>
            <Bottom>
                <NavLink to={`${url}/followings`}>
                    Abonné
                </NavLink>
                <NavLink to={`${url}/followers`} >
                    Abonnés
                </NavLink>
            </Bottom>

        </Container>
    )
}

export default UsersNav
const Container = styled.div`
background-color: rgba(21,32,43, 0.9);
position:sticky;
z-index:999;
top:0;
right:0;
left:0;
border-left:0.5px solid gray;
border-right:0.5px solid gray;
border-bottom:0.5px solid gray;
display:flex;
flex-direction:column;

`
const Top = styled.div`
display:flex;
align-items:center;
padding:0px 10px;
`
const Bottom = styled.div`
margin-top:15px;
display:flex;
justify-content:space-between;
a{
display:flex;
align-items:center;
justify-content:center;
font-weight:700;
width:50%;
padding:15px 10px;
color:white;
text-decoration:none;

&:hover{
        background-color: #223344;
        transition:1s;
       
}
}
`
const Icon = styled.div`
cursor:pointer;
display:flex;
align-items:center;
margin:0px 15px;
width:40px;
height:40px;
border-radius:50%;
justify-content:center;
&:hover{
    background-color:  #052d48;
    transition: all 1s ease;
}
`
const Info = styled.div`
cursor:pointer;
display:flex;
flex-direction:column;
`
const Username = styled.span`
font-weight:700;
font-size:20px;
`
const Tweet = styled.span`
color:gray;
font-size:12px;
`