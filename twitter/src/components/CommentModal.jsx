import React, { useState } from 'react'
import styled from 'styled-components'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Picker from 'emoji-picker-react';
import Popover from '@material-ui/core/Popover';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';

function CommentModal({ setCommentModal }) {
    const [File, setFile] = useState(null)
    const [tweet, setTweet] = useState([])

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject.emoji);
        setTweet(prev => [...prev, emojiObject.emoji])
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTweet = (e) => {
        setTweet([e.target.value])

    }
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }
    console.log(File)
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Container>
            <ModalContainer>
                <ModalHeader>
                    <Ic onClick={() => setCommentModal(false)}>
                        <Tooltip title="Fermer" arrow>
                            <CloseOutlinedIcon fontSize='small' />
                        </Tooltip>
                    </Ic>
                </ModalHeader>
                <ModalBody>
                    <CommentContainer>
                        <Top>
                            <UserImg>
                                <img src="/images/my-image.jpg" alt="" />
                            </UserImg>
                            <Info>
                                <Username>Youcef Ben Khadem </Username>
                                <Tag>@youcef_khadem.</Tag>
                                <PostedDate>2h</PostedDate>
                            </Info>
                        </Top>
                        <Content>

                            <Right> hello guys are u ok ?</Right>

                            <Left>
                                En réponse à <a href="#">@Rilik09 et @Luffy_sama_100</a></Left>
                        </Content>

                    </CommentContainer>

                    <CommentResponse>

                        <UserImg>
                            <img src="/images/my-image.jpg" alt="" />
                        </UserImg>
                        <Input>
                            <InputContainer>
                                <CommentInput type='text' placeholder='Tweeter votre réponse' value={tweet.join('')} onChange={handleTweet} />
                            </InputContainer>
                            {File &&
                                <ImgContainer>
                                    <img src={URL.createObjectURL(File)} alt='' />
                                    <IC onClick={() => setFile(null)} >
                                        <Tooltip title="Remove" arrow>
                                            <CloseOutlinedIcon fontSize='medium' />
                                        </Tooltip>
                                    </IC>
                                </ImgContainer>
                            }
                        </Input>

                    </CommentResponse>
                </ModalBody>
                <ModalBottom>
                    <Bottom>
                        <IconContainer>
                            <Tooltip title="Médias" arrow>
                                <UploadContainer>
                                    <LabelFile htmlFor='file'>
                                        <Icon>
                                            <PermMediaOutlinedIcon fontSize='small' />
                                        </Icon>
                                    </LabelFile>
                                    <input type='file' id='file' style={{ display: 'none' }} onChange={handleFile} />
                                </UploadContainer>
                            </Tooltip>
                            <Tooltip title="GIF" arrow>
                                <Icon>
                                    <GifOutlinedIcon fontSize='large' />
                                </Icon>
                            </Tooltip>
                            <Tooltip title="Question" arrow>
                                <Icon>
                                    <EqualizerRoundedIcon fontSize='small' />
                                </Icon>
                            </Tooltip>
                            <Tooltip title="Emoji" arrow>
                                <Icon onClick={handleClick} id={id}>
                                    <SentimentSatisfiedOutlinedIcon fontSize='small' />
                                </Icon>
                            </Tooltip>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Picker onEmojiClick={onEmojiClick}
                                    pickerStyle={{
                                        backgroundColor: 'rgba(21,32,43,1.0)',
                                        border: 'none',
                                    }}

                                    disableSkinTonePicker
                                    searchPlaceholder='Search'
                                    disableAutoFocus

                                />
                            </Popover>
                            <Tooltip title="Programmer" arrow>
                                <Icon>
                                    <EventOutlinedIcon fontSize='small' />
                                </Icon>
                            </Tooltip>
                            <Tooltip title="médias" arrow>
                                <Icon>
                                    <RoomOutlinedIcon fontSize='small' />
                                </Icon>
                            </Tooltip>

                        </IconContainer>
                        <BtnContainer >
                            <span>Tweeter</span>
                        </BtnContainer>
                    </Bottom>
                </ModalBottom>
            </ModalContainer>
        </Container>
    )
}

export default CommentModal
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
//min-height:30%;
//z-index:999;
border-radius:10px;
//margin:50px 10px;

`
const ModalHeader = styled.div`
// height:50px;
// background-color: rgba(21,32,43, 0.9);
// position:sticky;
// z-index:999;
// display:flex;
// align-items:center;

`
const Ic = styled.div`
margin:5px 10px;
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
const ModalBody = styled.div`
margin:15px 15px;
`

const CommentContainer = styled.div`
display:flex;
flex-direction:column;
`
const Top = styled.div`
display:flex;
`
const Content = styled.div``
const CommentResponse = styled.div`
display:flex;
align-items:flex-start;
margin-top:15px;
`
const UserImg = styled.div`
margin-right:10px;
img{
    width:50px;
    height:50px;
    border-radius:50%;
}
`
const Info = styled.div`
display:flex;
align-items:flex-start;
`
const Username = styled.span`
margin-right:5px;
font-weight:600;
`
const Tag = styled.span`
margin-right:5px;
color:gray;
`
const PostedDate = styled.span`
color:gray;
`

const Right = styled.div`
//text-align:right;
width:80%;
margin-left:40px;
`
const Left = styled.div`
margin-top:20px;
text-align:left;
width:100%;
margin-left:40px;
a{
    color:rgb(29, 155, 240);
    text-decoration:none;
}
`
const InputContainer = styled.div`
width:100%;
`
const CommentInput = styled.textarea`
resize:none;
width:100%;
background-color:transparent;
border:none;
font-size:22px;
display:flex;
align-items:center;
color:white;
overflow:hidden;
&:focus{
    outline:none;
}
`
const ModalBottom = styled.div`

margin-bottom:10px;
margin-left:60px;

`
const Bottom = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const IconContainer = styled.div`
//margin:10px 30px;
display:flex;
align-items:center;
color:rgb(29, 155, 240);
`
const Icon = styled.div`
margin: 0px 5px;
cursor: pointer;
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    background-color:  #052d48;
    transition: all 1s ease;
}
`
const UploadContainer = styled.div``
const LabelFile = styled.label``
const BtnContainer = styled.button`
background-color:rgb(29, 155, 240);
color:white;
font-weight:600;
font-size:18px;
border-radius:30px;
display:flex;
align-items:center;
border:none;
justify-content:center;
padding:10px 20px;
margin-right:5px;
cursor:pointer;
&:hover{
    background-color: #0c78c0;
}

`
const Input = styled.div`
display:flex;
flex-direction:column;
`
const ImgContainer = styled.div`
width:100%;
height:100%;
display:flex;
align-items:top;
justify-content:flex-start;
img{
    position:relative;
    margin-bottom:15px;
    width:50%;
    height:60%;
    border-radius:5px;
    cursor:pointer;
}
`
const IC = styled.div`
color:white;
position:absolute;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(21,32,43, 0.6);
width:100%;
height:100%;
width:35px;
cursor:pointer;
height:35px;
margin:5px 5px;
border-radius:50%;
&:hover{
    background-color: rgba(21,32,43, 0.4);
    color:white;
}
`