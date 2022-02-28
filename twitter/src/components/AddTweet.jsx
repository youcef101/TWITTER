import React, { useState } from 'react'
import styled from 'styled-components'
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Picker from 'emoji-picker-react';
import Popover from '@material-ui/core/Popover';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
import { addTweet } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';

function AddTweet() {
    const [tweet, setTweet] = useState([])
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()
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

    const add_tweet = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newTweet = {
                        content: tweet.join(''),
                        tweetImage: downloadURL
                    }
                    addTweet(newTweet, dispatch);
                    setTweet([])
                    setFile(null)
                });
            }
        );

    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Container>
            <AddContainer>
                <Top>
                    <UserImg>
                        <img src='/images/my-image.jpg' alt='' />
                    </UserImg>
                    <Input>
                        <InputContainer>
                            <TextInput type='text' name='tweet' placeholder='Quoi de neuf ?' value={tweet.join('')} onChange={handleTweet} />
                        </InputContainer>
                        {file &&
                            <ImgContainer>
                                <img src={URL.createObjectURL(file)} alt='' />
                                <Ic onClick={() => setFile(null)}>
                                    <Tooltip title="Remove" arrow>
                                        <CloseOutlinedIcon fontSize='medium' />
                                    </Tooltip>
                                </Ic>
                            </ImgContainer>
                        }
                    </Input>
                </Top>
                <Bottom>
                    <IconContainer>

                        <UploadContainer>
                            <LabelFile htmlFor='File'>
                                <Icon>
                                    <Tooltip title="Médias" arrow>
                                        <PermMediaOutlinedIcon fontSize='small' />
                                    </Tooltip>
                                </Icon>
                            </LabelFile>
                            <input type='file' id='File' style={{ display: 'none' }} onChange={handleFile} />
                        </UploadContainer>


                        <Icon>
                            <Tooltip title="GIF" arrow>
                                <GifOutlinedIcon fontSize='large' />
                            </Tooltip>
                        </Icon>


                        <Icon>
                            <Tooltip title="Question" arrow>
                                <EqualizerRoundedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>


                        <Icon onClick={handleClick} id={id}>
                            <Tooltip title="Emoji" arrow>
                                <SentimentSatisfiedOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>

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

                        <Icon>
                            <Tooltip title="Programmer" arrow>
                                <EventOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>


                        <Icon>
                            <Tooltip title="médias" arrow>
                                <RoomOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>


                    </IconContainer>
                    <BtnContainer onClick={add_tweet}>
                        <span>Tweeter</span>
                    </BtnContainer>
                </Bottom>

            </AddContainer>
        </Container>
    )
}

export default AddTweet
const Container = styled.div`
border:0.5px solid gray;
border-top:none;
border-bottom:none;
`
const AddContainer = styled.div`
display:flex;
flex-direction:column;
margin:0px 15px;

`
const Top = styled.div`
display:flex;
align-items:flex-start;

`
const Input = styled.div`
display:flex;
flex-direction:column;
`
const Bottom = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const UserImg = styled.div`
img{
    width:45px;
    height:45px;
    border-radius:50%;
    cursor:pointer;
}
`
const InputContainer = styled.div`
width:85%;
margin:0px 10px;
`
const TextInput = styled.textarea`
width:100%;
color:white;
background-color:transparent;
border:none;

//min-height:55px;
padding:0px 15px;
font-size:20px;
resize:none;
overflow:hidden;
&:focus{
    outline:none;
    //border-bottom:1px solid gray;
}
`
const IconContainer = styled.div`
margin:10px 30px;
display:flex;
align-items:center;
color:rgb(29, 155, 240);
`
const Icon = styled.div`
margin:0px 5px;
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background-color:  #052d48;
    transition: all 1s ease;
}
`
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
cursor:pointer;
&:hover{
    background-color: #0c78c0;
}

`

const UploadContainer = styled.div``
const LabelFile = styled.label``
const ImgContainer = styled.div`
width:100%;
height:100%;
//background-color:yellow;
display:flex;
align-items:top;
justify-content:flex-start;
img{
    position:relative;
    margin-bottom:15px;
    width:90%;
    height:60%;
    border-radius:5px;
    cursor:pointer;
}
`
const Ic = styled.div`
margin:5px 5px;
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
border-radius:50%;
&:hover{
    background-color: rgba(21,32,43, 0.4);
    //color:white;
}
`
