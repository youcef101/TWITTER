import React, { useState } from 'react'
import styled from 'styled-components'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import EditProfileModal from './EditProfileModal';

function ProfileInfos() {
    const [editModal, setEditModal] = useState(false)
    return (
        <Container>
            <ProfileCover>
                <img src='https://pbs.twimg.com/profile_banners/1349348807348285443/1611583366/600x200' alt='' />
            </ProfileCover>
            <Infos>
                <ProfileImg>
                    <img src='/images/my-image.jpg' alt='' />
                </ProfileImg>
                <EditBtn onClick={() => setEditModal(true)}>
                    Editer le profil
                </EditBtn>

            </Infos>
            <ProfileInfo>
                <Top>
                    <Username>Youcef Ben Khadem</Username>
                    <Tag>@youcef_khadem</Tag>
                </Top>
                <Middle>
                    <Item>
                        <Icon>
                            <RoomOutlinedIcon fontSize='small' />
                        </Icon>
                        <span>Tunisie</span>
                    </Item>
                    <Item>
                        <Icon style={{ marginTop: '-4px' }}>
                            <CakeOutlinedIcon fontSize='small' />
                        </Icon>
                        <span>Naissance le 1 avril 1998</span>
                    </Item>
                    <Item>
                        <Icon>
                            <DateRangeOutlinedIcon fontSize='small' />
                        </Icon>
                        <span>A rejoint Twitter en janvier 2021</span>
                    </Item>

                </Middle>
                <Bottom>
                    <Field>
                        <a href="#">5 <span>abonnements</span></a>
                    </Field>
                    <Field>
                        <a href="#">3 <span>abonné</span></a>

                    </Field>
                </Bottom>
            </ProfileInfo>
            {editModal &&
                <EditProfileModal setEditModal={setEditModal} />
            }
        </Container>
    )
}

export default ProfileInfos
const Container = styled.div`
border:1px solid gray;
`
const ProfileCover = styled.div`
pointer:cursor;
img{
    width:100%;
    height:200px;
    object-fit:cover;
}
`
const Infos = styled.div`
display:flex;
justify-content:space-between;
margin:5px 15px;
`
const ProfileImg = styled.div`
margin-top:-72px;
img{
    width:135px;
    height:135px;
    border-radius:50%;
    border:4px solid rgba(21,32,43,1.00);
}
`
const EditBtn = styled.div`
cursor:pointer;
border:1px solid gray;
border-radius:30px;
padding:0px 15px;
height:35px;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
&:hover{
    background-color: #223344;
}
`
const ProfileInfo = styled.div`
margin:5px 15px;
`
const Top = styled.div`
display:flex;
flex-direction:column;
margin:10px 0px;
`
const Middle = styled.div`
display:flex;
align-items:center;
margin:10px 0px;
`
const Bottom = styled.div`
display:flex;
align-items:center;
margin:10px 0px;
`
const Username = styled.span`
font-weight:700;
font-size:23px;
`
const Tag = styled.span`
color:gray;
font-size:16px;
`
const Item = styled.div`
color:gray;
display:flex;
align-items:center;
margin-right:15px;
`
const Field = styled.div`
margin-right:15px;
a{
    color:white;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    };
    span{
        color:gray !important;
    }

}
`
const Icon = styled.div`
display:flex;
align-items:center;
`