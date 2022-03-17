import CloseOutlined from '@material-ui/icons/CloseOutlined'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import React from 'react'
import styled from 'styled-components'
import { MobileMax } from '../../responsive'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SideBar({ setIsOpen }) {
    const user = useSelector(state => state.user.current_user)
    const infos = useSelector(state => state.user.profileInfos)
    return (
        <Container>
            <SideBarHeader>
                <Info>Informations du compte</Info>
                <Icon onClick={() => setIsOpen(false)}>
                    <CloseOutlined />
                </Icon>

            </SideBarHeader>
            <SideBarTop>
                <Top>
                    <UserImg>
                        <img src={user?.profileImage} alt='' />
                    </UserImg>
                    <Icon>
                        <AddCircleOutlineOutlinedIcon fontSize='large' />
                    </Icon>
                </Top>
                <Middle>
                    <Username>Youcef Ben Khadem</Username>
                    <Tag>@youcef_khadem</Tag>
                </Middle>
                <Bottom>
                    <Item>
                        <NavLink to={`/user/${infos?._id}/followings`}>
                            {infos?.followings?.length} <span>Abonnements</span>
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to={`/user/${infos?._id}/followers`}>
                            {infos?.followers?.length} <span>Abonnés</span>
                        </NavLink>
                    </Item>
                </Bottom>
            </SideBarTop>
            <SideBarMenu>
                <MenuItem>
                    <NavLink to={`/user/${user?._id}`}>
                        <Ic>
                            <PersonOutlineIcon fontSize='small' />
                        </Ic>
                        <span>Profil</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to='#'>
                        <Ic>
                            <BookmarkBorderIcon fontSize='small' />
                        </Ic>
                        <span>Signets</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to='#'>
                        <Ic>
                            <ListAltIcon fontSize='small' />
                        </Ic>
                        <span>Listes</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to='/logout'>
                        <Ic>
                            <ExitToAppOutlinedIcon fontSize='small' />
                        </Ic>
                        <span>Se déconnecter</span>
                    </NavLink>
                </MenuItem>
            </SideBarMenu>
        </Container>
    )
}

export default SideBar
const Container = styled.div`
background-color:rgba(17, 26, 34) ;//rgba(21,32,43, 0.9)
position:absolute;
height:100vh;
min-width:250px;
z-index:999;
left:0;
bottom:0;
top:0;
display:none;
padding:0px 10px;
${MobileMax({
    display: 'flex',
    flexDirection: 'column'
})}
`
const SideBarHeader = styled.div`
background-color:rgba(17, 26, 34);
height:45px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Info = styled.div`
font-weight:700;
font-size:18px;

`
const Icon = styled.div`
cursor:pointer;
display:flex;
align-items:center;
`
const SideBarTop = styled.div`

margin-top:15px;
`
const Top = styled.div`
display:flex;
justify-content:space-between;
`
const UserImg = styled.div`
img{
    width:50px;
    height:50px;
    border-radius:50%;
}
`
const Middle = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:10px 10px;
`
const Bottom = styled.div`
display:flex;
align-items:center;
margin-top:15px;
`
const Username = styled.span``
const Tag = styled.span`
color:gray;
`
const Item = styled.div`
margin:0px 5px;
a{
    color:white;
    text-decoration:none;
    span{
color:gray !important;
    }
}
`
const SideBarMenu = styled.div`
margin-top:20px;
`
const MenuItem = styled.div`
margin:25px 0px;
a{
    display:flex;
    align-items:center;
    text-decoration:none;
    color:gray;
    span{
        color:white !important;
    }
}
`
const Ic = styled.div`
display:flex;
align-items:center;
margin:0px 5px;
`