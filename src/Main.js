import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {
    const history = useHistory();
    const word_list = useSelector((state) => state.word.list)
    // console.log(word_list)


    return (
        <>
            <WordListBox>
                {word_list.map((a, i) => {
                    <div>무야호</div>
                    // console.log(a)
                    return (
                        <Word key={i}>
                            {a}
                        </Word>
                    );
                })
                }
            </WordListBox>

            <button onClick={() => history.push('/add')}>추가하기</button>
        </>
    )
}

const WordListBox = styled.div`
    width: 85%;
    height: 1000px;
    margin: 30px auto;
    display: flex;
    
    flex-direction: row row-cols-1 row-cols-md-3 g-4;
    border: 1px solid gray;
    padding: 10px;
`;
const Word = styled.div`
    flex-wrap: wrap;
    width: 35%;
    height: 150px;
    border: 1px solid slateblue;
    border-radius: 10px;
    background: green;
    margin: 10px;
`;
export default Main