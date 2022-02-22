import React from 'react'
import styled from 'styled-components'
import Twitter from '@material-ui/icons/Twitter';
import { NavLink } from 'react-router-dom';

function Account() {
    return (
        <Container>
            <AccountContainer>
                <Left>

                    <Icon>
                        <Twitter fontSize='large' />
                    </Icon>
                </Left>
                <Right>
                    <Top>
                        <Ic>
                            <Twitter fontSize='large' />
                        </Ic>
                        <p>Ça se passe maintenant</p>
                        <span>Rejoignez Twitter dès aujourd'hui.</span>
                    </Top>
                    <Bottom>
                        <NavLink to='/register'>
                            <InscrireBtn>S'inscrire</InscrireBtn>
                        </NavLink>
                        <span>Vous avez déjà un compte ?</span>
                        <NavLink to='/login'>
                            <ConnectBtn>Se connecter</ConnectBtn>
                        </NavLink>
                    </Bottom>
                </Right>
            </AccountContainer>
        </Container>
    )
}

export default Account
const Container = styled.div`

`
const AccountContainer = styled.div`
flex:5;
display:flex;
`
const Left = styled.div`
flex:2;
position:relative;
background-image:url('https://abs.twimg.com/sticky/illustrations/lohp_850x623.png');
background-position:center;
height:100vh;
display:flex;
align-items:center;
justify-content:center;

`
const Right = styled.div`
flex:3;
margin:25px 30px;
`

const Icon = styled.div`
position:absolute;
color:white;
.MuiSvgIcon-fontSizeLarge {
    font-size: 19rem;
}
`
const Top = styled.div`
p{
    font-size:45px;
    font-weight:700;
};
span{
   font-size:35px;
    font-weight:700; 
}
`
const Ic = styled.div`
color:white;
.MuiSvgIcon-fontSizeLarge {
    font-size: 3rem;
}
`
const Bottom = styled.div`
margin-top:50px;
span{
    font-size:20px;
    font-weight:600;
};
a{
    text-decoration:none;
   
}
`
const ConnectBtn = styled.div`
width:35%;
padding:10px 10px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
font-weight:700;
border-radius:30px;
margin-top:15px;
background-color:transparent;
border:1px solid gray;
color:#0e87d8;
&:hover{
    background-color: #223344;
}
`
const InscrireBtn = styled(ConnectBtn)`
 margin-bottom:15px;
color:white;
background-color:#1d9bf0;
border:none;
&:hover{
    background-color: #0e87d8;
}
`