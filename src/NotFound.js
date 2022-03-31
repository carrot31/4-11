import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import './App.css';



const NotFound = (props) =>{
    const history = useHistory();
    return(
        <Box>
          <Content>잘못된 주소 입니다.</Content>
        <button onClick={() => {
            history.goBack();
        }}>뒤로가기</button>  
        </Box>
    )
}
const Box = styled.div`
    width: 500px;
    height: 300px;
    margin: 200px auto;
    border: 1px solid #F08080;
    border-radius: 10px;
    button{
        background: #F08080;
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
        color: white;
        font-family: 'Jal_Haru';
        font-size: 20px;
    }
    button:hover{
        box-shadow: 0px 0px 5px 0px #F08080;
    }
`;
const Content = styled.h1`
    margin-top: 100px;
    font-family: 'Jal_Haru';
`;

export default NotFound;