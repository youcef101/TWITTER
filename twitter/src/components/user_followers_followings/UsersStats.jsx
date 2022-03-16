import React from 'react'
import styled from 'styled-components'
import UsersNav from './UsersNav'
import FollowersList from './FollowersList'
import FollowingsList from './FollowingsList'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react'
import { getUserFollowers, getUserFollowings } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function UsersStats() {
    const { path } = useRouteMatch()
    const dispatch = useDispatch()
    const infos = useSelector(state => state.user.profileInfos)
    const followers = useSelector(state => state.user.followers)
    const followings = useSelector(state => state.user.followings)

    useEffect(() => {
        getUserFollowers(infos?._id, dispatch)
    }, [infos?._id, dispatch])

    useEffect(() => {
        getUserFollowings(infos?._id, dispatch)
    }, [infos?._id, dispatch])

    return (
        <Container>
            <UsersNav />
            <Switch>
                <Route path={`${path}/followers`}>
                    {followers &&
                        followers.map(follower => <FollowersList follower={follower} key={Math.random()} />)}
                </Route>
                <Route path={`${path}/followings`}>
                    {followings &&
                        followings.map(following =>
                            <FollowingsList following={following} key={Math.random()} />
                        )}
                </Route>
            </Switch>

        </Container>
    )
}

export default UsersStats
const Container = styled.div`
width:40%;
`