import React from 'react'
import styled from 'styled-components'
import { Ipad, IpadMax, MobileMax, Surface } from '../../responsive'
import FooterNav from '../responsive/FooterNav'
import TweetNav from './TweetNav'
import TweetPost from './TweetPost'

function SingleTweet() {
    return (
        <Container>
            <TweetNav />
            <TweetPost />
            <FooterNav />
        </Container>
    )
}

export default SingleTweet
const Container = styled.div`
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

})}

`