import React from 'react'
import styled from 'styled-components'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import Tooltip from '@material-ui/core/Tooltip';
function EditProfileModal({ setEditModal }) {
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
                        <SaveBtn>
                            Enregistrer
                        </SaveBtn>
                    </Right>
                </ModalHeader>
                <ModalBody>
                    <ProfileCover>
                        <img src='https://pbs.twimg.com/profile_banners/1349348807348285443/1611583366/600x200' alt='' />
                    </ProfileCover>
                    <ProfileCoverUp>
                        <IconContainer>
                            <Ic>
                                <Tooltip title="Ajouter une photo" arrow>
                                    <CameraAltOutlinedIcon fontSize='medium' />
                                </Tooltip>
                            </Ic>
                            <Ic>
                                <Tooltip title="Supprimer la photo" arrow>
                                    <CloseOutlinedIcon fontSize='medium' />
                                </Tooltip>
                            </Ic>
                        </IconContainer>
                    </ProfileCoverUp>
                    <ProfileImg>
                        <img src='/images/my-image.jpg' alt='' />
                        <IconContain>
                            <CameraIc>
                                <Tooltip title="Supprimer la photo" arrow>
                                    <CameraAltOutlinedIcon fontSize='medium' />
                                </Tooltip>
                            </CameraIc>
                        </IconContain>
                    </ProfileImg>
                    <InputContainer>
                        <Inputs>
                            <NameInput type='text' placeholder='Nom' />
                            <BioInput type='text' placeholder='Bio' />
                            <LocalInput type='text' placeholder='Localisation' />
                            <SiteInput type='text' placeholder='Site Web' />
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
//margin:0px 10px;
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