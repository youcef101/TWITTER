import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import SuggestionCard from './SuggestionCard';
import { useSelector } from 'react-redux';
import { IpadMax } from '../../responsive';


function AccountSuggestions() {
    const suggestions = useSelector(state => state.user.suggestions)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                },
            }
        ]
    };
    return (
        <Container>
            <div style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '600' }}>Qui suivre ?</div>
            <SuggestionSlider {...settings}>
                {suggestions &&
                    suggestions.map(suggest =>
                        <SuggestionCard key={Math.random()} suggest={suggest} />
                    )}


            </SuggestionSlider>
        </Container>
    )
}

export default AccountSuggestions
const Container = styled.div`
border-right:0.5px solid gray;
border-left:0.5px solid gray;
border-bottom:0.5px solid gray;
padding:10px 10px;
display:none;
${IpadMax({
    display: 'inherit'
})};
`
const SuggestionSlider = styled(Slider)`
&:focus{
    outline:none;
};
.slick-prev::before,
.slick-next::before {
  display: none;
}

`