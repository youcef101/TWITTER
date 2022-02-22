import React, { useState } from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import CachedTwoToneIcon from '@material-ui/icons/CachedTwoTone';
import TweetComments from './TweetComments';

function TweetPost({ setCommentModal, commentModal }) {
    const [like, setLike] = useState(false)
    return (
        <Container>
            <TweetContainer>
                <TweetHeader>
                    <Infos>
                        <UserImg>
                            <img src='/images/my-image.jpg' alt='' />
                        </UserImg>
                        <Info>
                            <Username><a href="#">Youcef Ben Khadem</a></Username>
                            <Tag>@youcef_khadem</Tag>
                        </Info>
                    </Infos>
                    <Tooltip title="Plus" arrow>
                        <Icon>
                            <MoreHorizIcon fontSize='small' />
                        </Icon>
                    </Tooltip>
                </TweetHeader>
                <TweetBody>
                    <TweetText>
                        <HashTag>#OnePiece1041 #ONEPIECE</HashTag>
                        <Text>
                            <p>
                                Mark my words, this is the one and only appropriate chance for blackening Enma.
                                The shinigami is most definitely Enma, and I’m guessing it will make a contract
                                with Zoro to kill Kaidou and turn into a black blade to fulfill this purpose.
                            </p>
                        </Text>
                    </TweetText>
                    <TweetImg>
                        <img src='/images/my-image.jpg' alt='' />
                    </TweetImg>

                </TweetBody>
                <PostedDate>
                    <a href="#">5:52 PM · 13 févr. 2022</a>
                </PostedDate>

                <TweetStats>
                    <StatsContainer>
                        <Item><a href="#">23 <span>Retweets</span></a></Item>
                        <Item><a href="#">5 <span>Tweets cités</span></a></Item>
                        <Item><a href="#">462 <span>J'aime</span></a></Item>
                    </StatsContainer>
                </TweetStats>
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
            </TweetContainer>
            <TweetComments setCommentModal={setCommentModal} commentModal={commentModal} />
        </Container>
    )
}

export default TweetPost
const Container = styled.div`

`
const TweetContainer = styled.div`
border-top:none !important;
border:1px solid gray;
padding:5px 5px;
`
const TweetHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-between;

`
const UserImg = styled.div`
margin-right:5px;
cursor:pointer;
display:flex;
align-items:center;
img{
    width:50px;
    height:50px;
    border-radius:50%;
}
`
const Infos = styled.div`
display:flex;
align-items:center;
`
const Info = styled.div`
display:flex;
flex-direction:column;
`
const Username = styled.span`
a{
    color:white;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    };
    font-weight:600;
font-size:19px;
}

`
const Tag = styled.span`
color:gray;

`
const Icon = styled.div`
display:flex;
align-items:center;
cursor:pointer;
`
const TweetBody = styled.div`
margin-top:25px;
display:flex;
align-items:center;
flex-direction:column;
`
const TweetText = styled.div``
const HashTag = styled.span`
color:rgb(29, 155, 240);
font-weight:600;
font-size:20px;
cursor:pointer;
`
const Text = styled.div`
p{
font-weight:600;
font-size:20px;
}
`
const TweetImg = styled.div`
width:100%;
img{
    border-radius:10px;
    cursor:pointer;
    width:100%;
    height:400px;
    object-fit:cover;
}
`
const PostedDate = styled.div`
margin:5px 5px;
a{
    color:gray;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
}
`

const TweetStats = styled.div`
padding:10px 5px;
border:1px solid gray;
border-left:none;
border-right:none;
`
const StatsContainer = styled.div`
display:flex;
align-items:center;
`
const Item = styled.div`
margin-right:35px;
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
const Bottom = styled.div`
padding:10px 5px;
//border-bottom:1px solid gray;

`
const IconContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
`
const Ic = styled.div`
margin:0px 5px;
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
color:gray;
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