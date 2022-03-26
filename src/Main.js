import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeWord, updateWord } from './redux/modules/word';



const Main = () => {
    const history = useHistory();
    const word_list = useSelector((state) => state.word.list)
    const dispatch = useDispatch();
    // console.log(...word_list)


    return (
        <>
            <WordListBox>
                {word_list.map((a, i) => {
                    console.log(i)
                    return (
                        <Word className='WordList' keys={i}>
                                <DoneBtn 
                                completed = {a.completed}
                                onClick={()=>{
                                    dispatch(updateWord(i));
                                  }}>완료</DoneBtn>
                                <UpdateBtn onClick={() => {
                                    history.push('/update/'+i)
                                }}>수정</UpdateBtn>
                                <RemoveBtn onClick={()=>{
                                    dispatch(removeWord(i))
                                }}>제거</RemoveBtn>

                            <div>{a.word}</div>
                            <div>{a.explain}</div>
                            <Blue>{a.example}</Blue>
                        </Word>
                    );
                })
                }
            </WordListBox>

            <AddBtn onClick={() => history.push('/add')}>+</AddBtn>
            <ScrollBtn onClick={()=> window.scrollTo({top:0, left:0, behavior:'smooth'})}>Go up</ScrollBtn>
        </>
    )
}

const WordListBox = styled.div`
    max-width: 90%;
    height: 100%;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    border: 1px solid gray;
    padding: 5px;
`;
const Word = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 150px;
    border: 1px solid green;
    border-radius: 10px;
    margin: 10px 10px 10px 20px;
    padding: 10px;
    justify-content: center;
    color: ${(props) => props.completed ? 'black' : 'yellow'};
    background-color: ${(props) => props.completed? 'black':'yellow'};
`;
const ChangeBox = styled.div`
    /* display: flex;
    width: 100px;
    background: red; */
`;
const DoneBtn = styled.button`
    display: flex;
    width:20%;
    height:20px;
    margin-left: 300px;
`;
const UpdateBtn = styled.button`
    display: flex;
    width:20%;
    height:20px;
    margin-left: 300px;
`;
const RemoveBtn = styled.button`
    display: flex;
    width:20%;
    height:20px;
    margin-left: 300px;
    
`;
const AddBtn = styled.button`
    width: 50px;
    height: 50px;
    background: green;
    color: white;
    border: none;
    border-radius: 50%;
    margin-left: 94%;
    
`;

const Blue = styled.div`
    color: blue;
`;
const ScrollBtn = styled.div`
    width: 50px;
    height: 50px;
    background: green;
    color: white;
    border: none;
    border-radius: 50%;
    margin-left: 94%;
`;
export default Main