import React, { useState } from 'react'
import styled from 'styled-components'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Twitter from '@material-ui/icons/Twitter';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';

const LeftBar = () => {
    const user = useSelector(state => state.user.current_user)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const handleTooltipOpen = () => {
        setModal(true);
    };
    const CloseToolTip = () => {
        window.addEventListener('mouseup', (e) => {
            const ele = document.getElementById('my-tooltip');
            if (!ele?.contains(e.target)) {
                setModal(false)
            } else {
                setModal(true)
            }

        });

    }

    useEffect(() => {
        getCurrentUser(user?._id, dispatch)
    }, [user?._id, dispatch])

    return (
        <Container onClick={CloseToolTip}>
            <MenuItems >
                <Ite>
                    <NavLink to='/'>
                        <Ic>
                            <Twitter fontSize='large' />
                        </Ic>
                    </NavLink>
                </Ite>
                <Item>
                    <NavLink to='/'>
                        <Icon>
                            <HomeRoundedIcon fontSize='large' />
                        </Icon>
                        <span style={{ fontWeight: '700' }}>Acceuil</span>
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to='/notifications'>
                        <Icon >
                            <NotificationsNoneIcon fontSize='large' />
                            <Badge>1</Badge>
                        </Icon>
                        <span>Notifications</span>
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to='#'>
                        <Icon >
                            <MailOutlineIcon fontSize='large' />
                            <Badge>3</Badge>
                        </Icon>
                        <span>Messages</span>
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to='#'>
                        <Icon >
                            <BookmarkBorderIcon fontSize='large' />
                        </Icon>
                        <span>Signets</span>
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to='#'>
                        <Icon >
                            <ListAltIcon fontSize='large' />
                        </Icon>
                        <span>Listes</span>
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to={`/user/${user?._id}`}>
                        <Icon >
                            <PersonOutlineIcon fontSize='large' />
                        </Icon>
                        <span>Profil</span>
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to='#'>
                        <Icon style={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                            <MoreHorizIcon fontSize='medium' />
                        </Icon>
                        <span>Plus</span>
                    </NavLink>
                </Item>
                <BtnContainer>
                    <span>Tweeter</span>
                </BtnContainer>
                <Bottom>
                    <UserImg>
                        <img src={user?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                    </UserImg>
                    <Info>
                        <Username>{user?.fullname}</Username>
                        <Tag>@{user?.fullname.replace(/ /g, '_')}</Tag>
                    </Info>


                    <Icon onClick={handleTooltipOpen} style={{ position: 'relative' }} >
                        <MoreHorizIcon fontSize='small' />
                    </Icon>


                </Bottom>
                {modal &&
                    <ModalContainer id='my-tooltip'  >
                        <Modal>
                            <Top>
                                <UserImg style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                                </UserImg>
                                <Info>
                                    <Username>{user?.fullname}</Username>
                                    <Tag>@{user?.fullname.replace(/ /g, '_')}</Tag>
                                </Info>
                            </Top>

                            <Middle>
                                <NavLink to='/logout'>
                                    <BTNContainer>Se déconnecter de @Youcef_khadem</BTNContainer>
                                </NavLink>
                            </Middle>

                        </Modal>
                    </ModalContainer>
                }
            </MenuItems>
        </Container>
    )
}

export default LeftBar
const Container = styled.div`
width:25%;
height:100vh;
display:flex;
align-items:flex-start;
justify-content:center;
position:sticky;
left:0;
top:0;
bottom:0;
`
const MenuItems = styled.div`

`
const Item = styled.div`

a{
color:white;
text-decoration:none;
display:flex;
cursor:pointer;
align-items:center;
margin:10px 0px;
padding:5px 15px;

span{
    font-size:22px;
    font-weight:600;
};
 &:hover{
    background-color:#2a4055;
    border-radius:30px;
} 
}
`
const Ite = styled(Item)`
a{
    color:white;
    text-decoration:none;
&:hover{
    background-color:rgba(21,32,43,1.00);
}
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
const Ic = styled.div`
margin:0px 10px;
cursor:pointer;
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background-color:  #052d48;
    transition: all 1s ease;
}
`
const ModalContainer = styled.div`
position:absolute;
margin-top:-210px;
margin-left:60px;
background-color:rgba(21,32,43,1.00);
width:280px;
z-index:999;
border-radius:20px;
-webkit-box-shadow: 0px 3px 15px 5px rgba(253,253,253,0.11); 
box-shadow: 0px 3px 15px 5px rgba(253,253,253,0.11);
`
const Modal = styled.div`
a{
    text-decoration:none;
    color:white;
}
`
const Top = styled.div`
display:flex;
align-items:center;
margin-bottom:15px;
margin:10px 10px;
`
const Middle = styled.div`
margin-bottom:20px;
padding:15px 10px;
cursor:pointer;
&:hover{
    background-color: #223344;
}; 
`
const BTNContainer = styled.div`
width:50%;
`


