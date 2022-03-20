import React from 'react'
import styled from 'styled-components'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { NavLink } from 'react-router-dom';
import { MobileMax } from '../../responsive';

function FooterNav() {
    return (
        <Container>
            <MenuItems>
                <NavLink exact to='/'>
                    <Item>

                        <Icon>
                            <HomeRoundedIcon />
                        </Icon>

                    </Item>
                </NavLink>
                <a href='#'>
                    <Item>

                        <Icon>
                            <SearchIcon />
                        </Icon>

                    </Item>
                </a>
                <NavLink to='/notifications'>
                    <Item>

                        <Icon>
                            <NotificationsNoneIcon />
                            <Badge>3</Badge>
                        </Icon>

                    </Item>
                </NavLink>
                <a href='#'>
                    <Item>

                        <Icon>
                            <MailOutlineIcon />
                            <Badge>2</Badge>
                        </Icon>

                    </Item>
                </a>
            </MenuItems>
        </Container>
    )
}

export default FooterNav
const Container = styled.div`
height:50px;
background-color:rgba(21,32,43, 0.9);//rgba(21,32,43, 0.9)
position:fixed;
z-index:998;
bottom:0;
right:0;
left:0;
//border-left:0.5px solid gray;
//border-right:0.5px solid gray;
display:none;
padding:0px 10px;
${MobileMax({
    display: 'flex'
})}
`
const MenuItems = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-around;

a{
    color:gray
}
a.active{
    color:white
}
`
const Item = styled.div`
/* color:gray;
a{
    color:gray
}
a.active{
    color:white
} */
`
const Icon = styled.div`
//color:white;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background-color:#2a4055;
    transition:1s;
};

`
const Badge = styled.div`
width:16px;
height:16px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:10px;
margin-left:-12px;
margin-top:-14px;
background-color:rgb(29, 155, 240);
color:white;
`