import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { axiosInstance } from '../../axios';
import { useEffect } from 'react';
import { getUserFollowings, getUserSuggestions } from '../../redux/apiCalls';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



function RightBar() {

    const suggestions = useSelector(state => state.user.suggestions)
    const { isFetching } = useSelector(state => state.user)
    const user = useSelector(state => state.user.current_user)
    const [isFollow, setIsFollow] = useState(false)
    const [isSuivre, setIsSuivre] = useState(false)
    const dispatch = useDispatch()

    const FollowUser = async (id) => {
        setIsSuivre(true)
        const userId = {
            userId: user?._id
        }
        try {
            await axiosInstance.put(`/user/${id}/follow`, userId);
            setIsFollow(!isFollow)
            setIsSuivre(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUserSuggestions(user?._id, dispatch)
    }, [user?._id, dispatch, isFollow])

    useEffect(() => {
        isFollow && getUserFollowings(user?._id, dispatch)
    }, [user?._id, dispatch, isFollow])

    return (
        <>

            <Container>

                <SearchContainer>
                    <SearchInput>
                        <SearchIcon fontSize='medium' style={{ color: 'gray', margin: '0px 10px' }} />
                        <input type='text' placeholder='Recherche Twitter' />
                    </SearchInput>
                </SearchContainer>

                <SuggestionContainer>
                    {isFetching ? <>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                            <CircularProgress color='inherit' size='30px' value={50} />
                        </div>
                    </> : <>
                        <Title>Suggestions</Title>
                        <Items>
                            {suggestions &&
                                suggestions.map(suggest =>
                                    <Item key={suggest?._id}>
                                        <Right>
                                            <NavLink to={`/user/${suggest?._id}`}>
                                                <UserImg>
                                                    <img src={suggest?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                                                </UserImg>
                                            </NavLink>
                                            <Infos>
                                                <Username>{suggest?.fullname}</Username>
                                                <Tag>@{suggest?.fullname?.replace(/ /g, '_')}</Tag>
                                            </Infos>
                                        </Right>
                                        <Left>
                                            <BtnContainer onClick={() => FollowUser(suggest?._id)} >
                                                <span>
                                                    {/*   {isSuivre ?
                                                        <CircularProgress /> 
                                                        : '*/}Suivre{/* '} */}</span>
                                            </BtnContainer>
                                        </Left>
                                    </Item>
                                )}

                        </Items>
                    </>}
                </SuggestionContainer>

            </Container>
        </>)
}

export default RightBar
const Container = styled.div`
border-left:1px solid gray;
//flex:1.5;
width:35%;
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
overflow:scroll;
overflow-x:hidden;
::-webkit-scrollbar {
  width: 10px;
  height:5px;

};
::-webkit-scrollbar-thumb {
  background: #3c5977;
  border-radius: 10px;
 
};

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
justify-content:space-between;
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
    width:45px;
    height:45px;
    border-radius:50%;
    object-fit:cover;
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
const Right = styled.div`
display:flex;
align-items:center;
`
const Left = styled.div`
display:flex;
align-items:center;
`
