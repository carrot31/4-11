// Actions//[프젝이름/모듈명/어떤액션인지] 
const CREATE = 'word/CREATE'; //생성하기
const UPDATE = 'word/UPDATE'; //수정하기
const REMOVE = 'word/REMOVE'; //제거하기

const initialState = {
    list: ['독일어','어려움','졸라게','무야호']
};

// Action Creators //액션 객체 만들자(뭐를)
export function createWord(word) {
  return { type: CREATE, word }; //자바스크립트에서는 키와 벨류가 똑같다면 생략가능;; 
}

export function updateWord(word_index) {
  return { type: UPDATE, word_index };
}

export function removeWord(word_index) {
  return { type: REMOVE, word_index };
}


// Reducer
//파라미터 = {} => 기본값 설정(값이 없을 땐 빈 딕셔너리를 뱉어라)
//: 실제로 파라미터에 아무 값이 없을 경우에 펑션을 주게되면 오류발생 => 기본값을 주자
export default function reducer(state = initialState, action = {}) { 
  switch (action.type) {
      case 'word/CREATE':{
        //   const new_word_list = [...state.list]
          console.log('생성완료!')
          return state
      }
    
    default: return state;
  }
}