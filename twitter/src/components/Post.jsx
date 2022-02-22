import React, { useState } from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import CachedTwoToneIcon from '@material-ui/icons/CachedTwoTone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

function Post({ setCommentModal, commentModal }) {
    const [like, setLike] = useState(false)
    return (
        <Container>

            <PostCard>
                <Link to='/tweet'>
                    <Top>
                        <TopCard>
                            <UserImg>
                                <img src='/images/my-image.jpg' alt='' />
                            </UserImg>
                            <Infos>
                                <Info>
                                    <Username><a href="#">Youcef ben kHADEM</a></Username>
                                    <Tag>@youcef_khadem.</Tag>
                                    <PostedDate>14h</PostedDate>
                                </Info>
                                <TweetDesc>
                                    <p>Não é falta de criatividade do Oda, muito menos coincidência. Nami é uma princesa, assim como todas as outras garotas de rosto semelhante. O Oda tá jogando na nossa cara 👀
                                        #ONEPIECE</p>
                                </TweetDesc>
                            </Infos>
                        </TopCard>
                        <Tooltip title="Plus" arrow>
                            <SettingIc>
                                <MoreHorizIcon fontSize='small' />
                            </SettingIc>
                        </Tooltip>

                    </Top>
                </Link>
                <Content>
                    <img src='/images/my-image.jpg' alt='' style={{ marginBottom: '15px' }} />
                    <IconContainer>

                        <Icon color='blue' onClick={() => setCommentModal(true)}>
                            <Tooltip title="Répondre" arrow>
                                <ChatBubbleOutlineTwoToneIcon fontSize='small' />

                            </Tooltip>

                        </Icon>
                        <Badge>3</Badge>
                        <Icon color='green'>
                            <Tooltip title="Retweeter" arrow>
                                <CachedTwoToneIcon fontSize='small' />

                            </Tooltip>

                        </Icon>
                        <Badge>5</Badge>
                        {!like ? <>
                            <Icon color='rose' onClick={() => setLike(!like)}>
                                <Tooltip title="Aimer" arrow>
                                    <FavoriteBorderIcon fontSize='small' />

                                </Tooltip>

                            </Icon>
                            <Badge>105</Badge>
                        </> : <>
                            <Icon color='rose' onClick={() => setLike(!like)} style={{ color: 'rgb(255, 0, 102)' }}>
                                <Tooltip title="Aimer" arrow>
                                    <FavoriteIcon fontSize='small' />
                                </Tooltip>

                            </Icon>
                            <Badge>105</Badge>
                        </>}
                        <Icon color='blue'>
                            <Tooltip title="Partager" arrow>
                                <ShareOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>


                    </IconContainer>
                </Content>
            </PostCard>

        </Container>
    )
}

export default Post
const Container = styled.div`
border:1px solid gray;
cursor:pointer;
&:hover{
   background-color: #192633;
};


`
const PostCard = styled.div`
a{
    color:white;
    text-decoration:none;
}
`
const Top = styled.div`
margin:10px 10px;
display:flex;
align-items:flex-start;
justify-content:space-between;
`
const TopCard = styled.div`
display:flex;
align-items:flex-start;

`
const Infos = styled.div`
display:flex;
flex-direction:column;
`
const UserImg = styled.div`
img{
    width:50px;
    height:50px;
    border-radius:50%;
    cursor:pointer;
}
`
const Info = styled.div`
margin:0px 10px;
display:flex;
align-items:center;

`
const Username = styled.span`
font-weight:600;
a{
    color:white;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    }
}
`
const Tag = styled.span`
margin:0px 5px;
color:gray
`
const PostedDate = styled.div`
color:gray;
`
const SettingIc = styled.div`
display:flex;
align-items:center;
cursor:pointer;

`
const TweetDesc = styled.div`
margin-left:10px;
margin-top:-12px;
`
const Content = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
img{
    width:85%;
    border-radius:8px;
}
`
const IconContainer = styled.div`
margin-bottom:15px;
display:flex;
align-items:center;

img{
   
    width:17px;
    height:17px;
   
}
`
const Icon = styled.div`
margin:0px 40px;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
color:gray;
&:hover{
    transition: all 0.5s ease;
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
    };
;
`
const Badge = styled.div`
color:gray;
font-size:12px;
margin-bottom:-4px;
margin-left:-38px;

`