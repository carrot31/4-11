import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Add = () =>{
    const history = useHistory();
    const text = React.useRef([]);

    return(
        <AddBox>
            <h3>단어 추가하기</h3>
            단어<input type='text' ref={elem => (text.current[1] = elem)} onChange={()=> console.log(text.current.value)}/>
            병음<input type='text' ref={elem => (text.current[2] = elem)} onChange={()=> console.log(text.current.value)}/>
            의미<input type='text' ref={elem => (text.current[3] = elem)} onChange={()=> console.log(text.current.value)}/>
            예문<input type='text' ref={elem => (text.current[4] = elem)} onChange={()=> console.log(text.current.value)}/>
            해석<input type='text' ref={elem => (text.current[5] = elem)} onChange={()=> console.log(text.current.value)}/>

            <button onClick={()=>{
                history.goBack();
            }}>저장하기</button>
        </AddBox>
    )
}

const AddBox =styled.div`
    width: 400px;
    height: 500px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    /* border: 1px solid gray; */
    & h3{
        text-align: center;
    }
    & input{
        border-top: none;
        border-right: none;
        border-left: none;
        margin-bottom: 20px;

    }
    & button{
        width: 200px;
        height: 40px;
        margin: 10px auto;
        background: green;
        color: white;
        border:none;
    }
    & button:hover{
        box-shadow: 0px 0px 5px 0px gray;
    }
`;
export default Add