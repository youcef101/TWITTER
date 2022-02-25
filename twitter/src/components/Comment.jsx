import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import CachedTwoToneIcon from '@material-ui/icons/CachedTwoTone';
import { Link } from 'react-router-dom';

function Comment({ setCommentModal, commentModal }) {
    const [like, setLike] = useState(false)
    return (
        <Container>

            <CommentContainer>
                <TopPost>
                    <UserImage>
                        <img src='/images/my-image.jpg' alt='' />
                    </UserImage>
                    <UserInfo>
                        <Up>
                            <Username><a href='#'>Youcef Ben Khadem</a></Username>
                            <Tag>youcef_khadem.</Tag>
                            <PostedDate>13h</PostedDate>
                        </Up>
                        <Down>
                            En réponse à <span style={{ color: 'rgb(29, 155, 240)' }}>@Youcef_khadem</span>
                        </Down>
                    </UserInfo>
                </TopPost>
                <Link to='/tweet'>
                    <Content >
                        hello guys how are u ?
                    </Content>
                </Link>
                <Bottom>
                    <IconContainer>
                        <Ic onClick={() => setCommentModal(true)} color='blue'>
                            <Tooltip title="Répondre" placement="bottom" arrow>
                                <ChatBubbleOutlineTwoToneIcon fontSize='small' />
                            </Tooltip>

                        </Ic>
                        <Ic color='green'>
                            <Tooltip title="Retweeter" placement="bottom" arrow>
                                <CachedTwoToneIcon fontSize='small' />

                            </Tooltip>

                        </Ic>
                        {!like ?
                            <Ic color='rose' onClick={() => setLike(!like)}>
                                <Tooltip title="Aimer" placement="bottom" arrow>
                                    <FavoriteBorderIcon fontSize='small' />

                                </Tooltip>

                            </Ic>
                            :
                            <Ic color='rose' onClick={() => setLike(!like)} style={{ color: 'rgb(255, 0, 102)' }}>
                                <Tooltip title="Aimer" placement="bottom" arrow>
                                    <FavoriteRoundedIcon fontSize='small' />
                                </Tooltip>

                            </Ic>
                        }
                        <Ic color='blue'>
                            <Tooltip title="Partager" placement="bottom" arrow>
                                <ShareOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Ic>
                    </IconContainer>
                </Bottom>

            </CommentContainer>

        </Container>
    )
}

export default Comment
const Container = styled.div`
/* a{
    color:white;
    text-decoration:none;
} */
`
const CommentContainer = styled.div`
cursor:pointer;
border:1px solid gray;
padding:10px 10px;
display:flex;
align-items:flex-start;
flex-direction:column;
a{
    color:white;
    text-decoration:none;
};
&:hover{
    background-color: #223344;
}
`
const TopPost = styled.div`
display:flex;
align-items:center;
`
const UserImage = styled.div`
display:flex;
align-items:center;
img{
    width:45px;
    height:45px;
    border-radius:50%;
}
`
const UserInfo = styled.div``
const Up = styled.div`
display:flex;
align-items:center;
`
const Down = styled.div`
color:gray;
margin:0px 5px;
`
const Username = styled.span`
font-weight:600;
margin:0px 5px;
cursor:pointer;
a{
    color:white;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
}
`
const Tag = styled.span`
color:gray;
margin:0px 5px;
`
const PostedDate = styled.span`
color:gray
`

const Content = styled.div`
margin:10px 0px;
width:100%;
//text-align:right;
`
const Bottom = styled.div`
width:100%;

`
const IconContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;

`
const Ic = styled.div`
color:gray;
margin:0px 5px;
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
   
    transition: all 1s ease;
    color:${props => {
        if (props.color === 'blue') {
            return 'rgb(29, 155, 240)'
        }
        else if (props.color === 'green') {
            return 'rgb(0, 204, 0)'
        } else if (props.color === 'rose') {
            return 'rgb(255, 0, 102)'
        }
    }};
    background-color:${props => {
        if (props.color === 'green') {
            return 'rgba(0, 186, 124,0.1)'
        } if (props.color === 'blue') {
            return 'rgba(29, 155, 240,0.1)'
        } if (props.color === 'rose') {
            return 'rgba(249, 24,128,0.1)'
        }
    }} ;
}
`