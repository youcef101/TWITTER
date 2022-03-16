import React from 'react'
import styled from 'styled-components'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Twitter from '@material-ui/icons/Twitter';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { axiosInstance } from '../../axios';


function Register() {
    const history = useHistory()
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirm: ''
    })

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const SignUp = async (e) => {
        e.preventDefault();
        let newUser = {
            firstname: inputs.firstname,
            lastname: inputs.lastname,
            email: inputs.email,
            password: inputs.password,
            password_confirm: inputs.password_confirm
        }
        try {
            await axiosInstance.post('/auth/register', newUser)
            history.push('/login')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Container>
            <RegsiterContainer>
                <ModalHeader>
                    <NavLink to='/account'>
                        <Icon>
                            <Tooltip title='Fermer' arrow>
                                <CloseOutlinedIcon fontSize='small' />
                            </Tooltip>
                        </Icon>
                    </NavLink>
                    <TwitterIc>
                        <Twitter fontSize='large' />
                    </TwitterIc>

                </ModalHeader>
                <ModalBody>
                    <InputContainer>
                        <FirstnameInput type='text' name='firstname' placeholder='First Name' onChange={handleChange} />
                        <LastnameInput type='text' name='lastname' placeholder='Last Name' onChange={handleChange} />
                        <EmailInput type='text' name='email' placeholder='Email' onChange={handleChange} />
                        <PasswordInput type='password' name='password' placeholder='Mot de passe' onChange={handleChange} />
                        <PasswordConfirmInput type='password' name='password_confirm' placeholder='Confirm mot de passe' onChange={handleChange} />
                        <LoginBtn onClick={SignUp}>S'inscrire</LoginBtn>
                        <Text><span>Vous avez un compte ? <NavLink to='/login'>Se connecter</NavLink></span></Text>
                    </InputContainer>

                </ModalBody>
            </RegsiterContainer>
        </Container>
    )
}

export default Register
const Container = styled.div`
width:100%;
height:100%;
right:0;
left:0;
top:0;
bottom:0;
background-color:rgba(59, 89, 120,0.3);
z-index:999;
position:fixed;
display:flex;
align-items:center;
justify-content:center;
`
const RegsiterContainer = styled.div`
background-color:rgba(21,32,43,1.00);
width:45%;
border-radius:10px;
padding:10px 10px;
`
const ModalHeader = styled.div`
display:flex;
align-items:center;
a{
    color:white;
}
`
const Icon = styled.div`
cursor:pointer;
width:35px;
height:35px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
background-color:#223344;
transition: all 0.5s ease;
}
`

const TwitterIc = styled.div`
width:100%;
display:flex;
align-items:flex-start;
justify-content:center;
`
const ModalBody = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:50px;
`
const InputContainer = styled.div`
width:90%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const FirstnameInput = styled.input`
width:100%;
height:50px;
margin-bottom:10px;
font-size:16px;
border:2px solid #324d67;
padding:0px 5px;
color:white;
background-color:transparent;
border-radius:4px;
&:focus{
    outline:none;
    border:2px solid #1d9bf0;
    transition: all 0.5s ease;
}
`
const LastnameInput = styled(FirstnameInput)``
const PasswordInput = styled(FirstnameInput)``
const EmailInput = styled(FirstnameInput)``
const PasswordConfirmInput = styled(FirstnameInput)``

const LoginBtn = styled.div`
width:95%;
margin-top:40px;
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
const Text = styled.div`
display:flex;
justify-content:flex-start;
width:100%;
margin-top:50px;
span{
   a{
    color:#1d9bf0;
    font-size:13px;
   
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
}
}
`