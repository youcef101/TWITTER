import React from 'react'
import Twitter from '@material-ui/icons/Twitter';
import styled from 'styled-components';

function Loading() {
    return (
        <Container>
            <IconContainer>
                <Icon>
                    <Twitter fontSize='large' />
                </Icon>
            </IconContainer>
        </Container>
    )
}

export default Loading
const Container = styled.div`
top:0;
bottom:0;
right:0;
left:0;
background-color: rgba(21,32,43,1.00);
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100vh;
`
const IconContainer = styled.div``
const Icon = styled.div`
color:rgb(29, 155, 240);
.MuiSvgIcon-fontSizeLarge {
    font-size: 3.5rem;
}
`