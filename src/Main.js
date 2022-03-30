import React from 'react';
import './App.css';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWordFB, updateWordFB, updateWordFB2 } from './redux/modules/word';
import { loadWordFB } from './redux/modules/word';
import { IoMdFlower, IoMdAddCircle } from 'react-icons/io';
import { MdAutoFixHigh, MdDelete, MdHideSource } from 'react-icons/md';
import { HiArrowCircleUp, HiPencilAlt } from 'react-icons/hi';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Main = () => {
    const history = useHistory();
    const word_list = useSelector((state) => state.word.list)
    const dispatch = useDispatch();
    // console.log(...word_list)

    React.useEffect(() => {
        dispatch(loadWordFB());
    }, [])

    const settings = {
        arrows: false,
        dots: true, //이동 점
        infinite: true, //끝-처음 반복
        slidesToShow: 1, //한화면에 보이는 개수
        slidesToScroll: 1, //넘어가는 화면 수
        // variableWidth: true,
    };

    return (
        <>
            {/* <Styled_Slide {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Styled_Slide> */}
            <WordListBox>
                
                {word_list.map((a, i) => {
                    // console.log(a)
                    return (
                        <Word className='WordList' completed={a.completed} keys={i} >
                            <ButtonBox completed={a.completed}>
                                <IoMdFlower className='done'
                                    onClick={() => {
                                        dispatch(updateWordFB(word_list[i].id))
                                    }}
                                    onDoubleClick={() => {
                                        dispatch(updateWordFB2(word_list[i].id))
                                    }}
                                >완료</IoMdFlower>
                                <HiPencilAlt className='modify'
                                    onClick={() => {
                                        history.push('/update/' + i)
                                    }}>수정</HiPencilAlt>
                                <MdDelete className='remove'
                                    onClick={() => {
                                        // dispatch(removeWord(i))
                                        dispatch(deleteWordFB(word_list[i].id))
                                    }}>제거</MdDelete>
                            </ButtonBox>

                            <ContentWord>{a.word}</ContentWord>
                            <Contentexplain>{a.explain}</Contentexplain>
                            <Contentex completed={a.completed}>ex) {a.example}</Contentex>


                        </Word>
                    );
                })
                }
            </WordListBox>
            <Test>test모드</Test>    
            <Plus><IoMdAddCircle onClick={() => history.push('/add')} /></Plus>
            <Goup><HiArrowCircleUp onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} /></Goup>
        </>
    )
}
// const Styled_Slide = styled(Slider)`
	
//     .slick-list{ //얘로 크기조정 했음
//     	width: 400px;
//         height: 200px;
//         margin: 200px auto;
//         background-color: green;
// }`
const WordListBox = styled.div`
    max-width: 88%;
    height: 100%;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-left: 20px; 
    
`;
const Word = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-height: 150px;
    border: 1px solid #F08080;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    justify-content: left;
    text-align: left;
    color: ${(props) => props.completed ? 'white' : 'black'};
    background-color: ${(props) => props.completed ? '#F08080' : '#fff'}; 
    &:hover{
        box-shadow: 0px 0px 5px 0px #F08080;
    } 

`;
const ButtonBox = styled.div`
    display:flex;
    flex-direction: row;
    width: 100px;
    height: 30px;
    margin-left: 320px;
    color: ${(props) => props.completed ? '#fff' : '#F08080'};
    .done{
        margin-right: 4px;
        font-size: 25px; 
    }
    .modify{
        font-size :25px;
    }
    .remove{
        font-size :25px; 
    }
`;
const ContentWord = styled.div`
    font-family: 'OTJalollineunharuRA';
    font-size: 30px;
    margin-bottom: 15px;
    margin-left: 5px;
    
   
`;
const Contentexplain = styled.div`
    font-family: 'OTJalollineunharuRA';
    font-size: 18px;
    margin-bottom: 8px;
    margin-left: 5px;
    /* opacity: 0;
    &:hover{
        opacity:1;
    } */
`;
const Contentex = styled.div`
    display: flex;
    color: ${(props) => props.completed ? 'white' : 'blue'};
    font-family: 'OTJalollineunharuRA';
    font-size: 18px;
    margin-left: 5px;

`;
const Plus = styled.div`
    font-size: 50px;
    color: #F08080;
    position: fixed;
    bottom: 50px;
    right: 40px;

`;
const Goup = styled.div`
    font-size: 50px;
    color: #F08080;
    position: fixed;
    bottom: 0;
    right: 40px;
`;
const Test = styled.button`
    &:active{
        color:red;
    }
`;
export default Main