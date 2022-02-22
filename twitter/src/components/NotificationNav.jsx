import React, { useState } from 'react'
import styled from 'styled-components'
import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function NotificationNav() {
    const [value, setValue] = useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Container>

            <Left>
                Notifications
            </Left>
            <Right>
                <Tooltip title="Paramètres" arrow>
                    <Icon>
                        <SettingsIcon fontSize='medium' />
                    </Icon>
                </Tooltip>
            </Right>

        </Container>
    )
}

export default NotificationNav
const Container = styled.div`
//height:85px;
background-color: rgba(21,32,43, 0.9);
position:sticky;
z-index:999;
top:0;
right:0;
left:0;
border-left:0.5px solid gray;
border-right:0.5px solid gray;
display:flex;
align-items:center;
justify-content:space-between;
padding:0px 10px;

`
const Left = styled.div`
font-weight:700;
font-size:20px;
cursor:pointer;
`
const Right = styled.div`
img{
    cursor:pointer;
    width:20px;
    height:20px;
   
}
`
const Icon = styled.div`
margin:0px 5px;
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background-color:  #052d48;
    transition: all 1s ease;
}`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:0px 10px;
`

const TABS = styled(Tabs)`
border-bottom:0.5px solid gray;
width:100%;
`
const TAB = styled(Tab)`
flex-grow:1;
width:50%;
&:hover{
    background-color: #223344;
}
`