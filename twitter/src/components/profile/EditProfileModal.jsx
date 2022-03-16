import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from 'react-redux';
import { EditUserProfileCover, EditUserProfilePhoto, EditUser, getCurrentUser } from '../../redux/apiCalls';
import { useSelector } from 'react-redux';




function EditProfileModal({ setEditModal, userId, setIsEdit, isEdit }) {
    const profileInfos = useSelector(state => state.user.profileInfos)

    const dispatch = useDispatch()
    const [couv_file, setCouvFile] = useState(null)
    const [profile_file, setProfileFile] = useState(null)
    const user = useSelector(state => state.user.current_user)


    const [inputs, setInputs] = useState({
        profileCover: profileInfos?.profileCover,
        profileImage: profileInfos?.profileImage,
        firstname: profileInfos?.firstname,
        lastname: profileInfos?.lastname,
        bio: profileInfos?.bio,
        site: profileInfos?.site,
        country: profileInfos?.country,
    })

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleCouvFile = (e) => {
        setCouvFile(e.target.files[0])
    }
    const handleProfileFile = (e) => {
        setProfileFile(e.target.files[0])
    }

    useEffect(() => {
        getCurrentUser(user?._id, dispatch)

    }, [isEdit, dispatch, user?._id])



    const editProfileInfos = async (e) => {
        setIsEdit(false)
        e.preventDefault();
        const edited_user = {
            userId: profileInfos?._id,
            firstname: inputs?.firstname,
            lastname: inputs?.lastname,
            bio: inputs?.bio,
            site: inputs?.site,
            country: inputs?.country,
        }
        await EditUser(userId, edited_user, dispatch)
        setIsEdit(true)
        setEditModal(false)
    }



    const editProfileCover = async (e) => {
        setIsEdit(false)
        e.preventDefault();
        const couv_fileName = new Date().getTime() + couv_file?.name;
        const storage = getStorage(app);
        const couv_storageRef = ref(storage, couv_fileName);
        const uploadTask_couv = uploadBytesResumable(couv_storageRef, couv_file);
        uploadTask_couv.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => { },
            () => {
                getDownloadURL(uploadTask_couv.snapshot.ref).then((downloadURL) => {
                    const user_cover = {
                        userId: userId,
                        profileCover: downloadURL
                    }
                    EditUserProfileCover(userId, user_cover, dispatch);
                    setIsEdit(true)
                    setCouvFile(null)


                });
            }
        );
    }



    const editProfilePhoto = async (e) => {
        setIsEdit(false)
        e.preventDefault();
        const profile_fileName = new Date().getTime() + profile_file?.name;
        const storage = getStorage(app);
        const profile_storageRef = ref(storage, profile_fileName);
        const uploadTask_profile = uploadBytesResumable(profile_storageRef, profile_file);
        uploadTask_profile.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => { },
            () => {
                getDownloadURL(uploadTask_profile.snapshot.ref).then((downloadURL) => {
                    const user_photo = {
                        userId: user?._id,
                        profileImage: downloadURL
                    }
                    EditUserProfilePhoto(userId, user_photo, dispatch);
                    setIsEdit(true)
                    setProfileFile(null)

                });
            }
        );
    }



    return (
        <Container>
            <ModalContainer>
                <ModalHeader>
                    <Left>
                        <Icon onClick={() => setEditModal(false)}>
                            <Tooltip title="Fermer" arrow>
                                <CloseOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>
                        <Info>
                            <span>Editer le profil</span>
                        </Info>
                    </Left>
                    <Right>
                        <SaveBtn onClick={editProfileInfos}>
                            Enregistrer
                        </SaveBtn>
                    </Right>
                </ModalHeader>
                <ModalBody>
                    <ProfileCover>
                        {
                            couv_file ?
                                <img src={URL.createObjectURL(couv_file)} alt='' />
                                : <img src={profileInfos?.profileCover || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4G-hTwlMWrgdt0tsiMSpc1delPncu1U1Hw&usqp=CAU"} alt='' />
                        }

                    </ProfileCover>
                    <ProfileCoverUp>
                        <IconContainer>
                            {(!profileInfos?.profileCover && !couv_file) || (profileInfos?.profileCover && !couv_file) ?
                                <UploadContainer>
                                    <LabelFile htmlFor='file1'>
                                        <Ic>
                                            <Tooltip title="Ajouter une photo" arrow>
                                                <CameraAltOutlinedIcon fontSize='medium' />
                                            </Tooltip>
                                        </Ic>
                                    </LabelFile>
                                    <input type='file' id='file1' name='file1' style={{ display: 'none' }} onChange={handleCouvFile} />
                                </UploadContainer>
                                : <>
                                    <Ic onClick={editProfileCover}>
                                        <Tooltip title="Modifier la photo du couverture" arrow>
                                            <EditOutlinedIcon fontSize='medium' />
                                        </Tooltip>
                                    </Ic>

                                </>}
                        </IconContainer>
                    </ProfileCoverUp>
                    <ProfileImg>
                        {profile_file ?
                            <img src={URL.createObjectURL(profile_file)} alt='' />
                            : <img src={profileInfos?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                        }
                        <IconContain style={{ marginLeft: '33px' }}>


                            {(!profileInfos?.profileImage && !profile_file) || (profileInfos?.profileImage && !profile_file) ?
                                <UploadContainer>
                                    <LabelFile htmlFor='file2'>
                                        <CameraIc>
                                            <Tooltip title="Ajouter un photo du profile" arrow>
                                                <CameraAltOutlinedIcon fontSize='medium' />
                                            </Tooltip>
                                        </CameraIc>
                                    </LabelFile>
                                    <input type='file' id='file2' name='file2' style={{ display: 'none' }} onChange={handleProfileFile} />
                                </UploadContainer>


                                :


                                <CameraIc onClick={editProfilePhoto}>
                                    <Tooltip title="Modifier la photo" arrow>
                                        <EditOutlinedIcon fontSize='medium' />
                                    </Tooltip>
                                </CameraIc>

                            }


                        </IconContain>

                    </ProfileImg>
                    <InputContainer>
                        <Inputs>
                            <NameInput type='text' placeholder='First Name' name='firstname' defaultValue={profileInfos?.firstname} onChange={handleChange} />
                            <LastnameInput type='text' placeholder='Last Name' name='lastname' defaultValue={profileInfos?.lastname} onChange={handleChange} />
                            <BioInput type='text' placeholder='Bio' name='bio' defaultValue={profileInfos?.bio} onChange={handleChange} />
                            <LocalInput type='text' placeholder='Localisation' name='country' defaultValue={profileInfos?.country} onChange={handleChange} />
                            <SiteInput type='text' placeholder='Site Web' name='site' defaultValue={profileInfos?.site} onChange={handleChange} />
                        </Inputs>
                    </InputContainer>
                </ModalBody>
            </ModalContainer>
        </Container>
    )
}

export default EditProfileModal
const Container = styled.div`
width:100%;
height:100%;
right:0;
left:0;
top:0;
bottom:0;
background-color:rgba(64, 64, 64,0.4);
z-index:999;
position:fixed;
display:flex;
align-items:center;
justify-content:center;

`
const ModalContainer = styled.div`
background-color:rgba(21,32,43,1.00);
width:45%;
height:90%;
z-index:999;
border-radius:10px;
overflow:scroll;
::-webkit-scrollbar {
  width: 10px;
};
::-webkit-scrollbar-thumb {
  background: #b3b3b3;
  border-radius: 10px;
};
`
const ModalHeader = styled.div`
height:50px;
background-color: rgba(21,32,43, 0.9);
position:sticky;
z-index:999;
top:0;
right:0;
left:0;
display:flex;
align-items:center;
justify-content:space-between;
//margin:0px 10px;

`
const Left = styled.div`
display:flex;
align-items:center;
`
const Right = styled.div`
display:flex;
align-items:center;
`
const Icon = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
width:35px;
height:35px;
border-radius:50%;
&:hover{
    background-color:  #052d48;
    transition: all 1s ease;
}
`
const Info = styled.span`
font-weight:700;
font-size:20px;
`
const SaveBtn = styled.div`
display:flex;
align-items:center;
justify-content:center;
border-radius:20px;
padding:5px 10px;
background-color:white;
color:black;
cursor:pointer;
&:hover{
    background-color:#f2f2f2;
}
`
const ModalBody = styled.div`
width:100%;
`
const ProfileCover = styled.div`
img{
    width:100%;
    height:200px;
    object-fit:cover;
    
}
`
const ProfileImg = styled.div`
margin-left:15px;
margin-top:-60px;
img{
    width:120px;
    height:120px;
    border-radius:50%;
    border:4px solid rgba(21,32,43,1.00);
    background-color:rgba(21,32,43,1.00);
}

`
const ProfileCoverUp = styled.div`
display:flex;
align-items:center;
justify-content:center;
z-index:999
`
const IconContainer = styled.div`
display:flex;
align-items:center;
margin-top:-200px;

`
const Ic = styled.div`
margin:0px 10px;
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(21,32,43, 0.5);
&:hover{
   background-color:rgba(21,32,43, 0.3) 
}
`
const CameraIc = styled(Ic)`
//z-index:999;
`
const IconContain = styled.div`
display:flex;
align-items:center;
margin-top:-85px;

`
const InputContainer = styled.div`
margin:50px 0px;
display:flex;
align-items:center;
justify-content:center;

`
const Inputs = styled.div`
width:90%;
`
const NameInput = styled.input`
margin-bottom:20px;
width:100%;
background-color:transparent;
border-radius:4px;
border:1px solid gray;
padding:0px 5px;
height:60px;
font-size:18px;
color:white;
&:focus{
    border:2px solid rgb(29, 155, 240);
    outline:none;
    color:white;
};

`
const LastnameInput = styled(NameInput)``
const BioInput = styled.textarea`
margin-bottom:20px;
resize:none;
width:100%;
background-color:transparent;
border-radius:4px;
border:1px solid gray;
padding:0px 5px;
height:90px;
font-size:18px;
color:white;
&:focus{
    border:2px solid rgb(29, 155, 240);
    outline:none;
    color:white;
};
`
const LocalInput = styled(NameInput)``
const SiteInput = styled(NameInput)`
margin-bottom:5px;
`
const DefaultCouv = styled.div`
width:600px;
height:200px;
background-color:#e6e6e6;
display:flex;
align-items:center;
justify-content:center;
`

const UploadContainer = styled.div``
const LabelFile = styled.label``