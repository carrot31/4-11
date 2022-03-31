import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modifyWordFB } from './redux/modules/word';


const Update = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const word_index = params.index

    const word_list = useSelector((state) => state.word.list)
    const data = word_list[word_index]
    // const word_id = data.id
    // console.log(word_id)

    const [input, setInput] = useState({
        id: data.id,
        word: data.word,
        explain: data.explain,
        example: data.example,
    });

    const onChange = (e) => {
        // e.preventDefault(); //issue 물어보기~~~~~~
        const { name, value } = e.target; //바꿀 값 지정 *event.target.name & event.target.value 줄인것(비구조화 할당)
        setInput({
            ...input,  //기존 값 꼭 써줘라
            [name]: value, //name이라는 키를 가진 value
        });  
         //state와 아이디값 넘겨줌
    };
    dispatch(modifyWordFB(input, word_list[word_index].id))
    console.log(input)//scope 확인!!!!!


    //useState {data.word} 실시간으로 변하는 값에 활용 해라 //onChange 활용! ; 데이터 값까지 바꿔줌 
    //useRef -> 실시간 변화x, 현재 입력된 값을 보내줄 때만 //
    return (
        <>
            <AddBox>
                {/* <div>{word_list[word_index]}</div> */}
                <h3>단어 수정하기</h3>
                단어<input type='text' onChange={onChange} name='word' value={input.word} autoFocus />
                설명<input type='text' onChange={onChange} name='explain' value={input.explain} />
                예시<input type='text' onChange={onChange} name='example' value={input.example} />

                <button onClick={() => {
                    history.push('/');
                }}>수정하기</button>
            </AddBox>
        </>
    )
}

const AddBox = styled.div`
    max-width: 400px;
    height: 500px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    font-family: 'Jal_Haru';
    text-align: left;
    & h3{
        text-align: center;
    }
    & input{
        border-top: none;
        border-right: none;
        border-left: none;
        margin-bottom: 10px;
        padding:8px;
        font-family: 'Jal_Haru';

    }
    & button{
        width: 200px;
        height: 40px;
        margin: 10px auto;
        background: #F08080;
        color: white;
        border:none;
        font-family: 'Jal_Haru';
    }
    & button:hover{
        box-shadow: 0px 0px 5px 0px gray;
    }
`;
export default Update