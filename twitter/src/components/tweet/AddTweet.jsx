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
import app from '../../firebase'
import { addTweet } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';




function AddTweet() {

    const user = useSelector(state => state.user.current_user)

    const [tweet, setTweet] = useState([])
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [hashtag, setHashTag] = useState(false)
    const [tag, setTag] = useState(null)

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
    const handleTag = (e) => {
        setTag(e.target.value)
    }




    const add_tweet = (e) => {
        e.preventDefault();
        if (file) {
            const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
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

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const newTweet = {
                            userId: user?._id,
                            content: tweet.join(''),
                            hashTag: tag,
                            tweetImage: downloadURL
                        }
                        addTweet(newTweet, dispatch);
                        setTweet([])
                        setHashTag(false)
                        setFile(null)

                    });
                }
            );
        } else {

            const newTweet = {
                userId: user?._id,
                content: tweet.join(''),
                hashTag: tag,

            }
            addTweet(newTweet, dispatch);

            setTweet([]);
            setHashTag(false)

        }


    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Container>
            <AddContainer>
                <Top>
                    <NavLink to={`/user/${user?._id}`}>
                        <UserImg>
                            <img src={user?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                        </UserImg>
                    </NavLink>
                    <Input>
                        <InputContainer>
                            <TextInput type='text' name='tweet' placeholder='Quoi de neuf ?' value={tweet.join('')} onChange={handleTweet} />
                            {hashtag && <HashTagInput type='text' name='hashTag' placeholder='HashTag' onChange={handleTag} />}
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

                        <Icon onClick={() => setHashTag(!hashtag)}>
                            <Tooltip title="hashtag" arrow>
                                <span style={{ fontWeight: '600', fontSize: '20px', marginBottom: '5px' }}>#</span>
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

`
const AddContainer = styled.div`
display:flex;
flex-direction:column;
margin:0px 15px;

`
const Top = styled.div`
display:flex;
align-items:flex-start;
width:90%;
`
const Input = styled.div`
display:flex;
flex-direction:column;
width:100%;
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
width:100%;
margin:0px 10px;
`
const TextInput = styled.textarea`
width:100%;
color:white;
background-color:transparent;
border:none;
padding:0px 15px;
font-size:20px;
resize:none;
overflow:hidden;
&:focus{
    outline:none;
}
`
const HashTagInput = styled(TextInput)``
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
    
}
`
