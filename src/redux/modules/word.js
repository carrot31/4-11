import { async } from '@firebase/util';
import {db} from '../../firebase';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';

// Actions//[프젝이름/모듈명/어떤액션인지] 
const LOAD = 'word/LOAD'; //로드하기
const CREATE = 'word/CREATE'; //생성하기
const UPDATE = 'word/UPDATE'; //색변경하기
const UPDATE2 = 'word/UPDATE2'; //색변경하기
const REMOVE = 'word/REMOVE'; //제거하기
const MODIFY = 'word/MODIFY'; //수정하기

const initialState = {
    list: [],
}

// Action Creators //액션 객체 만들자(뭐를)
export function loadWord(word_list) {
    console.log('로드해라!')
    return { type: LOAD, word_list }; //자바스크립트에서는 키와 벨류가 똑같다면 생략가능;; 
} 

export function createWord(word) {
    console.log('추가해라!')
    return { type: CREATE, word }; //자바스크립트에서는 키와 벨류가 똑같다면 생략가능;; 
}

export function updateWord(word_index) {
    console.log('색변경해라!')
    return { type: UPDATE, word_index };
}

export function updateWord2(word_index) {
    console.log('색변경해라!')
    return { type: UPDATE2, word_index };
}

export function removeWord(word_index) {
    console.log('제거해라!')
    return { type: REMOVE, word_index };
}

export function modifyWord(word){
    console.log('수정해라!')
    return{ type: MODIFY, word}
}

// setDocs 

//미들웨어
export const loadWordFB = () =>{
    return async function(dispatch){
      const word_data = await getDocs(collection(db,'word')); //객체정보가져와
      // console.log(bucket_data);
  
      let word_list = [];
  
      word_data.forEach((b)=>{
        word_list.push({id: b.id, ...b.data()}) //배열로 넣어줌 
      });
      // console.log(word_list)
       dispatch(loadWord(word_list))
    }
}
export const addWordFB = (word) =>{
    return function(dispatch){
        const docRef = addDoc(collection(db,'word'),word);
        // console.log(docRef)  
        
        // const word_data = {id: docRef, ...word};
        // console.log(word_data)
        // dispatch(createWord(word_data))
    }
}

export const updateWordFB = (word_id) =>{
    return async function(dispatch, getState){
        const docRef = doc(db,'word',word_id);
        // console.log(docRef)
        await updateDoc(docRef,{completed: !word_id.completed});
        // await updateDoc(docRef,{completed: !getState().word.list.completed});
        // await updateDoc(docRef,{completed: getState().word.list.completed? false: true})

        const _word_list = getState().word.list
        const word_index = _word_list.findIndex((b)=>{
            // console.log(_word_list)
            return b.id === word_id; 
        })
        dispatch(updateWord(word_index))
    };
}

export const updateWordFB2 = (word_id) =>{
    return async function(dispatch, getState){
        const docRef = doc(db,'word',word_id);
        // console.log(docRef)
        await updateDoc(docRef,{completed: false});

        const _word_list = getState().word.list
        const word_index = _word_list.findIndex((b)=>{
            // console.log(_word_list)
            return b.id === word_id; 
        })
        dispatch(updateWord2(word_index))
    };
}
export const deleteWordFB = (word_id) =>{
    return function(dispatch, getState){
        if(!word_id){
            window.alert('아이디가 없네요!');
            return;
          }
        const docRef = deleteDoc(doc(db,'word',word_id));
        // console.log(docRef)
        // await deleteDoc(docRef);

        // const _word_list = getState().word.list
        // const word_index = _word_list.findIndex((b)=>{
        //     // console.log(_word_list)
        //     return b.id === word_id; 
        // })
        dispatch(removeWord(docRef))
    };
}

export const modifyWordFB = (word, word_id) =>{
    return function(dispatch, getState){
        const docRef = updateDoc(doc(db,'word',word_id),word);
        // const docRef = doc(db,'word', word_id);
        // await updateDoc(docRef, word);
        // const word_index = {id: docRef, ...word};
        // dispatch(modifyWord(word_index))
    };
}

// Reducer
//파라미터 = {} => 기본값 설정(값이 없을 땐 빈 딕셔너리를 뱉어라)
//: 실제로 파라미터에 아무 값이 없을 경우에 펑션을 주게되면 오류발생 => 기본값을 주자
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {      
        case 'word/LOAD': {
            console.log('로드완료');
            return { list: action.word_list}
        }
        case 'word/CREATE': {
            const new_word_list = [...state.list, action.word]
            console.log('추가완료');
            return { list: new_word_list }
        }
        case 'word/UPDATE':{
            const new_word_list = state.list.map((a, i) => {
              if(parseInt(action.word_index) === i){
                return {...a, completed: !a.completed};
              }else{
                return a;
              }
            })
            console.log('색변경완료!')
            return {list: new_word_list}
          }
          case 'word/UPDATE2':{
            const new_word_list = state.list.map((a, i) => {
              if(parseInt(action.word_index) === i){
                return {...a, completed: false};
              }else{
                return a;
              }
            })
            console.log('색재변경완료!')
            return {list: new_word_list}
          }

        case 'word/REMOVE': {
            const new_word_list = state.list.filter((a, i) => {
                return parseInt(action.word_index) !== i;        //action에 들어올 값이 
            })
            
            console.log('제거완료!!')
            return { list: new_word_list }
        }
        case "word/MODIFY":
            const new_word_list = state.list.map((a,i) => {
                if(parseInt(action.word_index) === i){
                    return {...a, ...action.word}
                }else{
                    return a;
                }
            })
            console.log('수정완료!')
            return {list: new_word_list};

        default: return state;  
    }
}