import React from 'react';
import styled from 'styled-components';
import { useHistory,useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
// import { updateWord } from './redux/modules/word';

const Add = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const word_index = params.index
    // console.log(word_index)

    const word_text = React.useRef(null);
    const word_explain = React.useRef(null);
    const word_ex = React.useRef(null);

    const word_list = useSelector((state) => state.word.list)
    console.log(word_list[word_index])
    
    

    return(
        <AddBox>
            {/* <div>{word_list[word_index]}</div> */}
            <h3>단어 수정하기</h3>
            단어<input type='text' ref={word_text} name={word_list[word_index].word}/>
            설명<input type='text' ref={word_explain} value={word_list[word_index].explain} />
            예시<input type='text' ref={word_ex} value={word_list[word_index].example} />

            <button onClick={()=>{
                // dispatch(updateWord())
                history.push('/');
            }}>수정하기</button>
        </AddBox>
    )
}

const AddBox =styled.div`
    width: 400px;
    height: 500px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
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