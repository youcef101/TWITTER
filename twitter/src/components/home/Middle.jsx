import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Posts from '../tweet/Posts'
import AccountSuggestions from '../suggestion/AccountSuggestions'
import AddTweet from '../tweet/AddTweet'
import NavBar from './NavBar'
import { getHomeTweets } from '../../redux/apiCalls'
import { Ipad, IpadMax, IpadMini, MobileMax, Surface } from '../../responsive'
import FooterNav from '../responsive/FooterNav'
import SideBar from '../responsive/SideBar'




function Middle() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.current_user);
    const tweets = useSelector(state => state.tweet.tweets);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        getHomeTweets(user?._id, dispatch)
    }, [user?._id, dispatch])


    return (<>
        <Container>
            <NavBar setIsOpen={setIsOpen} />
            {isOpen && <SideBar setIsOpen={setIsOpen} />}
            <AddTweet />
            <AccountSuggestions />
            {tweets && < Posts tweets={tweets} />}
            <FooterNav />
        </Container>

    </>)
}

export default Middle
const Container = styled.div`
position:relative;
overflow-x:hidden;

width:45%;
   ${Surface({
    width: '60%'
})};
${IpadMax({
    width: '75%'
})};
${Ipad({
    width: '85%'
})};
${MobileMax({
    width: '100%',
    overflowY: 'hidden'
})}

`