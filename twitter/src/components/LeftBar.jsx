import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Twitter from '@material-ui/icons/Twitter';

const LeftBar = () => {
    return (
        <Container>
            <MenuItems>
                <Ite>
                    <Icon>
                        <Twitter fontSize='large' />
                    </Icon>
                </Ite>
                <Item>
                    <Icon>
                        <HomeRoundedIcon fontSize='large' />
                    </Icon>
                    <span style={{ fontWeight: '700' }}>Acceuil</span>
                </Item>
                <Item>
                    <Icon >
                        <NotificationsNoneIcon fontSize='large' />
                        <Badge>1</Badge>
                    </Icon>
                    <span>Notifications</span>
                </Item>
                <Item>
                    <Icon >
                        <MailOutlineIcon fontSize='large' />
                        <Badge>3</Badge>
                    </Icon>
                    <span>Messages</span>
                </Item>
                <Item>
                    <Icon >
                        <BookmarkBorderIcon fontSize='large' />
                    </Icon>
                    <span>Signets</span>
                </Item>
                <Item>
                    <Icon >
                        <ListAltIcon fontSize='large' />
                    </Icon>
                    <span>Listes</span>
                </Item>
                <Item>
                    <Icon >
                        <PersonOutlineIcon fontSize='large' />
                    </Icon>
                    <span>Profil</span>
                </Item>
                <Item>
                    <Icon style={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                        <MoreHorizIcon fontSize='medium' />
                    </Icon>
                    <span>Plus</span>
                </Item>
                <BtnContainer>
                    <span>Tweeter</span>
                </BtnContainer>
                <Bottom>
                    <UserImg>
                        <img src='/images/my-image.jpg' alt='' />
                    </UserImg>
                    <Info>
                        <Username>Youcef Ben Khadem</Username>
                        <Tag>@youcef_khadem</Tag>
                    </Info>
                    <Icon>
                        <MoreHorizIcon fontSize='small' />
                    </Icon>
                </Bottom>
            </MenuItems>
        </Container>
    )
}

export default LeftBar
const Container = styled.div`
flex:1;
height:100vh;
display:flex;
align-items:flex-start;
justify-content:center;
position:sticky;
left:0;
top:0;
bottom:0;

`
const MenuItems = styled.div``
const Item = styled.div`
display:flex;
cursor:pointer;
align-items:center;
margin:10px 0px;
padding:5px 15px;
span{
    font-size:20px;
    font-weight:600;
};
&:hover{
    background-color:#2a4055;
    border-radius:30px;
}
`
const Ite = styled(Item)`
&:hover{
    background-color:rgba(21,32,43,1.00);
}
`
const Icon = styled.div`
margin:0 10px;
display:flex;
align-items:center;
color:white;
cursor:pointer;
`
const BtnContainer = styled.div`
margin-bottom:30px;
border-radius:30px;
cursor:pointer;
padding:10px 40px;
background-color:rgb(29, 155, 240);
display:flex;
align-items:center;
justify-content:center;
span{
    color:white;
    font-size:20px;
    font-weight:700;
};
&:hover{
    background-color: #0c78c0;
}
`
const Bottom = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
padding:5px 10px;
&:hover{
    background-color:#2a4055;
    border-radius:30px;
}
`
const UserImg = styled.div`
margin-right:5px;
img{
    width:40px;
    height:40px;
    border-radius:50%;
}
`
const Info = styled.div`
display:flex;
flex-direction:column;
`
const Username = styled.span`
white-space:nowrap;
font-weight:600;
`
const Tag = styled.span`
color: #999999;
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
background-color:rgb(29, 155, 240)
`