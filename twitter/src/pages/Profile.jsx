import React from 'react'
import { useState } from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import LeftBar from '../components/home/LeftBar'
import RightBar from '../components/home/RightBar'
import ProfilePage from '../components/profile/ProfilePage'
import UsersStats from '../components/user_followers_followings/UsersStats'



function Profile() {
    const { path } = useRouteMatch()


    return (<>
        <Container>
            <LeftBar />
            <Switch>
                <Route exact path={`${path}`}> <ProfilePage /></Route>
                <Route path={`${path}`}><UsersStats /></Route>

            </Switch>

            <RightBar />
        </Container>

    </>)
}

export default Profile
const Container = styled.div`
flex:5;
display:flex;
//overflow-x:hidden;
`