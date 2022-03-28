import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWordFB, removeWord, updateWordFB } from './redux/modules/word';
import {db} from './firebase';
import {collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import { loadWordFB } from './redux/modules/word';
// import { updateBucketFB } from '../../repeat/src/redux/modules/bucket';



const Main = () => {
    const history = useHistory();
    const word_list = useSelector((state) => state.word.list)
    const dispatch = useDispatch();
    // console.log(...word_list)

    React.useEffect(async()=>{   
        dispatch(loadWordFB());
        // addDoc(collection(db,'word'), {word: 'Hause', explain: '집', example: 'Ich moechte um die Schule gehen', completed: false})
        // const docRef = doc(db, 'word', 'khlom4EA9OK62Z3WBgoB');
        // deleteDoc(docRef)
      },[])


    return (
        <>
            <WordListBox>
                {word_list.map((a, i) => {
                    // console.log(a.completed)
                    return (
                        <Word className='WordList' completed ={a.completed} keys={i} >
                                <DoneBtn    
                                onClick={()=>{
                                    // dispatch(updateWord(i));
                                    dispatch(updateWordFB(word_list[i].id))
                                  }}>완료</DoneBtn>
                                <UpdateBtn onClick={() => {
                                    history.push('/update/'+i)
                                }}>수정</UpdateBtn>
                                <RemoveBtn onClick={()=>{
                                    // dispatch(removeWord(i))
                                    dispatch(deleteWordFB(word_list[i].id))
                                }}>제거</RemoveBtn>

                            <div>{a.word}</div>
                            <div>{a.explain}</div>
                            <Blue completed ={a.completed}>{a.example}</Blue>
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
    max-width: 88%;
    height: 100%;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* justify-content: center; */
    /* border: 1px solid gray; */
    padding-left: 20px;  //수정
`;
const Word = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 150px;
    border: 1px solid green;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    justify-content: center;
    color: ${(props) => props.completed ? 'white' : 'black'};
    background-color: ${(props) => props.completed? 'green':'#fff'}; 

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
    color: ${(props) => props.completed ? 'white' : 'blue'};
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