import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

function RightBar() {
    return (
        <Container>

            <SearchContainer>
                <SearchInput>
                    <SearchIcon fontSize='medium' style={{ color: 'gray', margin: '0px 10px' }} />
                    <input type='text' placeholder='Recherche Twitter' />
                </SearchInput>
            </SearchContainer>

            <SuggestionContainer>
                <Title>Suggestions</Title>
                <Items>
                    <Item>
                        <UserImg>
                            <img src='/images/my-image.jpg' alt='' />
                        </UserImg>
                        <Infos>
                            <Username>youcef ben khadem</Username>
                            <Tag>@youcef_khadem</Tag>
                        </Infos>
                        <BtnContainer>
                            <span>Suivre</span>
                        </BtnContainer>
                    </Item>
                    <Item>
                        <UserImg>
                            <img src='/images/my-image.jpg' alt='' />
                        </UserImg>
                        <Infos>
                            <Username>youcef ben khadem</Username>
                            <Tag>@youcef_khadem</Tag>
                        </Infos>
                        <BtnContainer>
                            <span>Suivre</span>
                        </BtnContainer>
                    </Item>
                    <Item>
                        <UserImg>
                            <img src='/images/my-image.jpg' alt='' />
                        </UserImg>
                        <Infos>
                            <Username>youcef ben khadem</Username>
                            <Tag>@youcef_khadem</Tag>
                        </Infos>
                        <BtnContainer>
                            <span>Suivre</span>
                        </BtnContainer>
                    </Item>
                    <Item>
                        <UserImg>
                            <img src='/images/my-image.jpg' alt='' />
                        </UserImg>
                        <Infos>
                            <Username>youcef ben khadem</Username>
                            <Tag>@youcef_khadem</Tag>
                        </Infos>
                        <BtnContainer>
                            <span>Suivre</span>
                        </BtnContainer>
                    </Item>
                    <Item>
                        <UserImg>
                            <img src='/images/my-image.jpg' alt='' />
                        </UserImg>
                        <Infos>
                            <Username>youcef ben khadem</Username>
                            <Tag>@youcef_khadem</Tag>
                        </Infos>
                        <BtnContainer>
                            <span>Suivre</span>
                        </BtnContainer>
                    </Item>
                    <Item>
                        <UserImg>
                            <img src='/images/my-image.jpg' alt='' />
                        </UserImg>
                        <Infos>
                            <Username>youcef ben khadem</Username>
                            <Tag>@youcef_khadem</Tag>
                        </Infos>
                        <BtnContainer>
                            <span>Suivre</span>
                        </BtnContainer>
                    </Item>
                </Items>
            </SuggestionContainer>

        </Container>
    )
}

export default RightBar
const Container = styled.div`
flex:1.5;
height:100vh;
display:flex;
align-items:center;
position:sticky;
top:0;
right:0;
bottom:0;
flex-direction:column;
`

const SearchContainer = styled.div`
margin-top:10px;
border-radius:30px;
background-color: #223344;
width:85%;
padding:16px 15px;
`
const SearchInput = styled.div`

display:flex;
align-items:center;

input{
    width:90%;
    font-size:16px;
    background-color: transparent;
    border:none;
    color:white;
    &:focus{
        outline:none;
    }
}
`
const SuggestionContainer = styled.div`
margin:30px 0px;
background-color:#223344;
border-radius:15px;
width:90%;
`
const Items = styled.div`
width:100%;
margin:15px 0px;
`
const Item = styled.div`
padding:10px 10px;
display:flex;

align-items:center;
cursor:pointer;
&:hover{
    background-color:#334d66;
}
`
const Title = styled.h2`
margin:10px 30px;
`
const UserImg = styled.div`
margin:0px 5px;
display:flex;
align-items:center;
img{
    widtth:45px;
    height:45px;
    border-radius:50%;
}
`
const Infos = styled.div`

display:flex;
flex-direction:column;
margin:0px 10px;
`
const Username = styled.span`
font-weight:600;
`
const Tag = styled.span`
color:gray;
`
const BtnContainer = styled.div`
margin:0px 15px;
background-color:white;
border-radius:30px;
color:black;
font-weight:600;
padding:5px 20px;
cursor:pointer;
&:hover{
  background-color:antiquewhite;  
}
span{

}
`
