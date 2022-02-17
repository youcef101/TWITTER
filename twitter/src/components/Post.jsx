import React from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import CachedTwoToneIcon from '@material-ui/icons/CachedTwoTone';

function Post() {
    return (
        <Container>
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
            <Content>
                <img src='/images/my-image.jpg' alt='' style={{ marginBottom: '15px' }} />
                <IconContainer>

                    <Icon color='blue'>
                        <Tooltip title="Répondre" arrow>
                            <ChatBubbleOutlineTwoToneIcon fontSize='small' />

                        </Tooltip>
                        <Badge>3</Badge>
                    </Icon>
                    <Icon color='green'>
                        <Tooltip title="Retweeter" arrow>
                            <CachedTwoToneIcon fontSize='small' />

                        </Tooltip>
                        <Badge>5</Badge>
                    </Icon>
                    <Icon color='rose'>
                        <Tooltip title="Aimer" arrow>
                            <FavoriteBorderIcon fontSize='small' />

                        </Tooltip>
                        <Badge>105</Badge>
                    </Icon>
                    <Icon color='blue'>
                        <Tooltip title="Partager" arrow>
                            <ShareOutlinedIcon fontSize='small' />
                        </Tooltip>
                    </Icon>


                </IconContainer>
            </Content>

        </Container>
    )
}

export default Post
const Container = styled.div`
border:1px solid gray;

cursor:pointer;
&:hover{
   background-color: #192633;
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
   /*  background-color:${props => {
        if (props.color === 'green') {
            return 'rgb(0, 102, 0)'
        } if (props.color === 'blue') {
            return '#0c78c0'
        } if (props.color === 'rose') {
            return ' #e6005c ;opacity:0.2'
        }
    }} ; */
    };
;
`
const Badge = styled.div`
color:gray;
font-size:12px;
margin-bottom:-4px;
margin-left:8px;
`