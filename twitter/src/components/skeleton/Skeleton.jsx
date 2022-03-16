import React from 'react'
import styled from 'styled-components'

function Skeleton({ type }) {
    const PostSkeleton = () => (
        <Container>

            <PostCard>

                <Top>
                    <TopCard>

                        <NavLink to={`/user/${tweet_user_infos?._id}`}>
                            <UserImg>
                                <img src={tweet_user_infos?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                            </UserImg>
                        </NavLink>
                        <Infos>
                            <Info>
                                <Username><a href="#">{tweet_user_infos?.fullname}</a></Username>
                                <Tag>@{tweet_user_infos?.fullname.replace(/ /g, '_')}.</Tag>
                                <PostedDate>{format(tweet?.createdAt)}</PostedDate>
                            </Info>
                            <NavLink to={`/tweet/${tweet?._id}/get`}>
                                <TweetDesc>

                                    <HashTag>{tweet?.hashTag}</HashTag>
                                    <Text><p>{tweet?.content}</p></Text>
                                </TweetDesc>
                            </NavLink>
                        </Infos>

                    </TopCard>



                    <Setting>
                        <Tooltip title="Plus" arrow>
                            <SettingIc onClick={() => setSetting(true)}>
                                <MoreHorizIcon fontSize='small' />
                            </SettingIc>
                        </Tooltip>
                        {setting &&
                            <SettingPopup id='my-popup'>
                                <Popup>
                                    {tweet?.userId === user?._id && <>
                                        <Item style={{ color: 'red' }}>
                                            <Ic>
                                                <DeleteForeverOutlinedIcon fontSize='medium' />
                                            </Ic>
                                            <span>Supprimer</span>
                                        </Item>
                                        <Item style={{ color: 'gray' }}>
                                            <Ic>
                                                <EditOutlinedIcon fontSize='medium' />
                                            </Ic>
                                            <span>Edit</span>
                                        </Item>
                                    </>}
                                    {(!user?.followings.includes(tweet?.userId) && tweet?.userId !== tweet_user_infos?._id) ?
                                        <Item style={{ color: 'gray' }}>
                                            <Ic>
                                                <PersonAddOutlinedIcon fontSize='medium' />
                                            </Ic>
                                            <span>Suivre @{tweet_user_infos?.fullname.replace(/ /g, '_')}</span>
                                        </Item>
                                        : null}
                                    {user?.followings.includes(tweet?.userId) ?
                                        <Item style={{ color: 'gray' }}>
                                            <Ic>
                                                <PersonAddDisabledOutlinedIcon fontSize='medium' />
                                            </Ic>
                                            <span>Se désabonner @{tweet_user_infos?.fullname.replace(/ /g, '_')}</span>
                                        </Item>
                                        : null}
                                </Popup>
                            </SettingPopup>
                        }
                    </Setting>
                </Top>

                <Content>

                    <img src={tweet?.tweetImage} alt='' style={{ marginBottom: '15px' }} />
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

                        <Icon color='rose' >
                            <Tooltip title="Aimer" arrow>
                                <FavoriteBorderIcon fontSize='small' />
                            </Tooltip>
                        </Icon>
                        <Badge>105</Badge>

                        <Icon color='rose' style={{ color: 'rgb(255, 0, 102)' }}>
                            <Tooltip title="Aimer" arrow>
                                <FavoriteIcon fontSize='small' />
                            </Tooltip>
                        </Icon>
                        <Badge>105</Badge>



                        <Icon color='blue'>
                            <Tooltip title="Partager" arrow>
                                <ShareOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>


                    </IconContainer>
                </Content>

            </PostCard>


        </Container>
    );

    return <PostSkeleton />;

}

export default Skeleton
const Container = styled.div``