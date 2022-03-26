// Actions//[프젝이름/모듈명/어떤액션인지] 
const CREATE = 'word/CREATE'; //생성하기
const UPDATE = 'word/UPDATE'; //수정하기
const REMOVE = 'word/REMOVE'; //제거하기

const initialState = {
    list: [
        { word: 'Schule', explain: '학교', example: 'ich gehe zur Schule', completed: false },
        { word: 'Karotte', explain: '당근', example: 'ich esse die Karotte', completed: false },
        { word: 'Katze', explain: '고양이', example: 'Diese Katze sind sehr nett', completed: false },
        { word: 'Hund', explain: '개', example: 'Diese Hund sind sehr nett', completed: false },
    ]
}

// Action Creators //액션 객체 만들자(뭐를)
export function createWord(word) {
    console.log('추가해라!')
    return { type: CREATE, word }; //자바스크립트에서는 키와 벨류가 똑같다면 생략가능;; 
}

export function updateWord(word_index) {
    console.log('색변경해라!')
    return { type: UPDATE, word_index };
}

export function removeWord(word_index) {
    console.log('제거해라!')
    return { type: REMOVE, word_index };
}


// Reducer
//파라미터 = {} => 기본값 설정(값이 없을 땐 빈 딕셔너리를 뱉어라)
//: 실제로 파라미터에 아무 값이 없을 경우에 펑션을 주게되면 오류발생 => 기본값을 주자
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'word/CREATE': {
            const new_word_list = [...state.list, action.word]
            console.log('추가완료');
            return { list: new_word_list }
        }
        case 'word/UPDATE':{
            // console.log(state, action)
            const new_word_list = state.list.map((a, i) => {
              if(parseInt(action.word_index) === i){
                return {...a, completed: true};
              }else{
                return a;
              }
            })
            console.log('색변경완료!')
            return {list: new_word_list}
          }

        case 'word/REMOVE': {
            const new_word_list = state.list.filter((a, i) => {
                return parseInt(action.word_index) !== i;        //action에 들어올 값이 
            })
            console.log('제거완료!!')
            return { list: new_word_list }
        }

        default: return state;
    }
}