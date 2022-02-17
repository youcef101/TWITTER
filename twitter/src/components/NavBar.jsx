import React from 'react'
import styled from 'styled-components'

function NavBar() {
    return (
        <Container>

            <Left>
                Acceuil
            </Left>
            <Right>
                <img src="/images/sparkless.svg" alt="" />
            </Right>

        </Container>
    )
}

export default NavBar
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
justify-content:space-between;
padding:0px 10px;
`
const Left = styled.div`
font-weight:700;
font-size:20px;
cursor:pointer;
`
const Right = styled.div`
img{
    cursor:pointer;
    width:20px;
    height:20px;
   
}
`