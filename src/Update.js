import React from 'react';
import styled from 'styled-components';
import { useHistory,useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { modifyWord } from './redux/modules/word';

const Update = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const word_index = params.index
    // console.log(word_index)

    const word_text = React.useRef(null);
    const word_explain = React.useRef(null);
    const word_example = React.useRef(null);

    const word_list = useSelector((state) => state.word.list)
    const data = word_list[word_index]
    // console.log(word_list[word_index])
     
    React.useEffect(() => {
            if(word_text){
                word_text.current.focus()
            }

        const onClickUpdate =() =>{

        }
    }, [word_text]);

    const getData = () =>{
        const get_text = word_text.current.value;
        const get_explain = word_explain.current.value;
        const get_example = word_example.current.value;


        const word_push ={
            get_text,
            get_explain,
            get_example,
        };

        return word_push;
    }

    // const modifyWord = (e) => {
    //     e.preventDefault();

    //     const word_obj = getData();
    //     if (!word_obj) return;
    
    //     dispatch(modifyWord(word_obj, data));
    //     history.push("/");
    //   };

    return(
        <AddBox>
            {/* <div>{word_list[word_index]}</div> */}
            <h3>단어 수정하기</h3>
            단어<input type='text' ref={word_text} value={data.word}/>
            설명<input type='text' ref={word_explain} value={data.explain} />
            예시<input type='text' ref={word_example} value={data.example} />

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
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    & h3{
        text-align: center;
    }
    & input{
        border-top: none;
        border-right: none;
        border-left: none;
        margin-bottom: 10px;
        padding:8px;

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
export default Update