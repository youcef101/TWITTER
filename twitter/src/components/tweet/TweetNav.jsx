import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';

function TweetNav() {
    return (
        <Container>
            <Icon>
                <Tooltip title="Verso" arrow>
                    <ArrowBackIcon fontSize='small' />
                </Tooltip>
            </Icon>

            <Username>Tweet</Username>


        </Container>
    )
}

export default TweetNav
const Container = styled.div`
height:45px;
background-color: rgba(21,32,43, 0.9);
position:sticky;
z-index:999;
top:0;
right:0;
left:0;
border-left:0.5px solid gray;
border-right:0.5px solid gray;
display:flex;
align-items:center;
padding:0px 10px;
`
const Icon = styled.div`
cursor:pointer;
display:flex;
align-items:center;
margin:0px 5px;
width:40px;
height:40px;
border-radius:50%;
justify-content:center;
&:hover{
    background-color:  #052d48;
    transition: all 1s ease;
}
`

const Username = styled.span`
display:flex;
align-items:center;
font-weight:700;
font-size:20px;
`
