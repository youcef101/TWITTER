import React from 'react'
import styled from 'styled-components'
import Twitter from '@material-ui/icons/Twitter';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogoutCalls } from '../../redux/apiCalls';
import { MobileMax } from '../../responsive';

function SignOutAlert() {
    const dispatch = useDispatch()
    const Logout = () => {
        LogoutCalls(dispatch)
    }
    return (
        <Container>
            <AlertContainer>
                <Alert>
                    <Top>
                        <Icon>
                            <Twitter fontSize='large' />
                        </Icon>
                    </Top>
                    <Middle>
                        <Faq>
                            <span>Se déconnecter de Twitter ?</span>
                        </Faq>
                        <Text>
                            <span>
                                Vous pouvez toujours vous reconnecter à tout moment.
                                Si vous voulez simplement changer de compte,
                                vous pouvez le faire en ajoutant un compte existant.
                            </span>
                        </Text>
                    </Middle>
                    <Bottom>
                        <LogoutBtn onClick={Logout}>
                            Se déconnecter
                        </LogoutBtn>
                        <NavLink to='/'>
                            <AnnulerBtn>
                                Annuler
                            </AnnulerBtn>
                        </NavLink>

                    </Bottom>
                </Alert>
            </AlertContainer>
        </Container>
    )
}

export default SignOutAlert
const Container = styled.div`
width:100%;
height:100%;
right:0;
left:0;
top:0;
bottom:0;
background-color:rgba(64, 64, 64,0.8);
z-index:999;
position:fixed;
display:flex;
align-items:center;
justify-content:center;

`
const AlertContainer = styled.div`
background-color:rgba(21,32,43,1.00);
width:23%;
border-radius:10px;
padding:10px 10px;
${MobileMax({
    width: '60%'
})}

`
const Alert = styled.div`
width:100%;
margin-bottom:15px;
`
const Top = styled.div`
margin:15px 0px;

`
const Icon = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
color:white;
.MuiSvgIcon-fontSizeLarge {
    font-size: 3rem;
}
`
const Middle = styled.div`4

`
const Faq = styled.div`
margin-bottom:10px;
display:flex;
align-items:flex-start;
justify-content:center;
span{
    width:85%;
    font-weight:600;
    font-size:20px;
}
`
const Text = styled.div`
margin-bottom:15px;
display:flex;
align-items:flex-start;
justify-content:center;
span{
    width:85%;
    color:gray;
    
}
`
const Bottom = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
a{
display:flex;
align-items:center;
justify-content:center;
width:88%;
text-decoration:none;

}
`
const LogoutBtn = styled.div`
width:80%;
cursor:pointer;
background-color:white;
color:black;
font-weight:700;
border-radius:30px;
padding:10px 10px;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background-color:#f2f2f2;
}
`
const AnnulerBtn = styled.div`
width:100%;
padding:10px 10px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
font-weight:700;
border-radius:30px;
margin-top:10px;
background-color:transparent;
border:1px solid gray;
color:white;
&:hover{
    background-color: #223344;
}
`