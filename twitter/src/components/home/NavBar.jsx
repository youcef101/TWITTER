import React from 'react'
import styled from 'styled-components'
import { MobileMax } from '../../responsive'
import Twitter from '@material-ui/icons/Twitter';
import { useSelector } from 'react-redux';

function NavBar({ setIsOpen }) {
    const user = useSelector(state => state.user.current_user)
    return (<>
        <Container>

            <Left>
                <UserImg onClick={() => setIsOpen(true)}>
                    <img src={user?.profileImage} alt='' />
                </UserImg>
                <span>Acceuil</span>

            </Left>
            <IconContainer>
                <Icon>
                    <Twitter />
                </Icon>
            </IconContainer>
            <Right>
                <img src="/images/sparkless.svg" alt="" />
            </Right>

        </Container>

    </>)
}

export default NavBar
const Container = styled.div`
height:50px;
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
${MobileMax({
    position: 'fixed'
})}
`
const Left = styled.div`
display:flex;
align-items:center;

span{
font-weight:700;
font-size:20px;
cursor:pointer;
${MobileMax({
    display: 'none'
})};
}
`
const UserImg = styled.div`
display:none;
img{
    display:flex;
    align-items:center;
    margin-right:5px;
    width:30px;
    height:30px;
    border-radius:50%;
    cursor:pointer;
};
${MobileMax({
    display: 'inherit'
})}
`
const Right = styled.div`
img{
    cursor:pointer;
    width:20px;
    height:20px;
   
}
`
const IconContainer = styled.div`
display:none;
align-items:center;
justify-content:center;
${MobileMax({
    display: 'flex'
})}
`
const Icon = styled.div`
color:rgb(29, 155, 240);
display:flex;
align-items:center;
`