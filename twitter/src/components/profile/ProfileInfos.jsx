import React, { useState } from 'react'
import styled from 'styled-components'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import EditProfileModal from '../profile/EditProfileModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '../../redux/apiCalls';
import { axiosInstance } from '../../axios';
import { Link, useRouteMatch } from 'react-router-dom';
import { setProfileInfo } from '../../redux/userSlice';
import { MobileMini } from '../../responsive';




function ProfileInfos({ userId }) {
    const [editModal, setEditModal] = useState(false)
    const [isFollow, setIsFollow] = useState(false)
    const [isUnfollow, setIsUnfollow] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const user = useSelector(state => state.user.current_user)
    const dispatch = useDispatch()
    const { path, url } = useRouteMatch()
    const profileInfos = useSelector(state => state.user.profileInfos)
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    useEffect(() => {
        const getProfileInfos = async (e) => {

            try {
                const res = await axiosInstance.get(`/user/${userId}/get`);
                const data = await res.data;

                dispatch(setProfileInfo(data))
            } catch (err) {
                console.log(err)
            }
        }
        getProfileInfos();

    }, [userId, isEdit, isFollow, isUnfollow])

    const UnfollowUser = async (id) => {
        const userId = {
            userId: user?._id
        }
        try {
            await axiosInstance.put(`/user/${id}/unfollow`, userId);
            setIsUnfollow(!isUnfollow)
        } catch (err) {
            console.log(err)
        }
    }

    const FollowUser = async (id) => {
        const userId = {
            userId: user?._id
        }
        try {
            await axiosInstance.put(`/user/${id}/follow`, userId);
            setIsFollow(!isFollow)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCurrentUser(user?._id, dispatch)
    }, [isFollow, isUnfollow])

    return (<>
        <Container>
            {profileInfos && <>
                <ProfileCover>
                    <img src={profileInfos?.profileCover || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4G-hTwlMWrgdt0tsiMSpc1delPncu1U1Hw&usqp=CAU"} alt='' />
                </ProfileCover>
                <Infos>
                    <ProfileImg >
                        <img style={{ position: 'relative' }} src={profileInfos?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />

                    </ProfileImg>
                    {user?._id === userId ?
                        <EditBtn onClick={() => setEditModal(true)}>
                            Editer le profil
                        </EditBtn>
                        : <>
                            {!user?.followings.includes(profileInfos?._id) ?
                                <BtnContainer onClick={() => FollowUser(profileInfos?._id)}>Suivre</BtnContainer>
                                :
                                <BtnContainer onClick={() => UnfollowUser(profileInfos?._id)}>Se désabonner</BtnContainer>
                            }
                        </>}
                </Infos>
                <ProfileInfo>
                    <Top>
                        <Username>{profileInfos?.fullname}</Username>
                        <Tag>@{profileInfos?.fullname.replace(/ /g, '_')}</Tag>
                    </Top>
                    <BioContainer>
                        <Bio>
                            {profileInfos?.bio}

                        </Bio>
                        <Site><a href='#'>{profileInfos?.site}</a></Site>
                    </BioContainer>
                    <Middle>
                        <Item>
                            <Icon>
                                <RoomOutlinedIcon fontSize='small' />
                            </Icon>
                            <span>{profileInfos?.country || 'XXXXXXXX'}</span>
                        </Item>
                        <Item>
                            <Icon style={{ marginTop: '-4px' }}>
                                <CakeOutlinedIcon fontSize='small' />
                            </Icon>
                            <span>{profileInfos?.dateNaissance || 'XXXXXXXX'}{/* Naissance le 1 avril 1998 */}</span>
                        </Item>
                        <Item>
                            <Icon>
                                <DateRangeOutlinedIcon fontSize='small' />
                            </Icon>
                            <span>A rejoint Twitter en {months[new Date(profileInfos?.createdAt).getMonth()] + ' ' + new Date(profileInfos?.createdAt).getFullYear()}</span>
                        </Item>

                    </Middle>
                    <Bottom>
                        <Field>
                            <Link to={`${url}/followings`} >{profileInfos?.followings.length || 0}<span>abonnements</span></Link>
                        </Field>
                        <Field>
                            <Link to={`${url}/followers`}>{profileInfos?.followers.length || 0}<span>abonné</span></Link>

                        </Field>

                    </Bottom>

                </ProfileInfo>
            </>}
            {editModal &&
                <EditProfileModal
                    setIsEdit={setIsEdit}
                    isEdit={isEdit}

                    setEditModal={setEditModal}
                    userId={userId}
                />
            }

        </Container>

    </>)
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
span{
    ${MobileMini({
    fontSize: '13px'
})}
}
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
const DefaultCouv = styled.div`
width:600px;
height:200px;
background-color:#e6e6e6;
display:flex;
align-items:center;
justify-content:center;
`
const Ic = styled.div`
cursor:pointer;
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(21,32,43, 0.5);
&:hover{
   background-color:rgba(21,32,43, 0.3) 
}
`
const UploadContainer = styled.div``
const LabelFile = styled.label``
const BioContainer = styled.div`
width:100%;
`
const Bio = styled.div`
max-width:85%;
`
const Site = styled.div`
margin:10px 0px;
a{
    color:rgb(29, 155, 240);
    text-decoration:none;
    font-size:17px;
    font-weight:600;
    &:hover{
        text-decoration:underline;
    }
}
`
const BtnContainer = styled.div`
cursor:pointer;
background-color:white; 
border-radius:30px;
padding:0px 20px;
height:35px;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
color:black;
&:hover{
    background-color:antiquewhite;  
}


`
