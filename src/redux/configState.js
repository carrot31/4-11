// createStore; 리듀서+리듀서+옵션+옵션... 을 하나로 묶어서 보내주는 것
// combineReducers; 만들었던 리듀서를 묶어줌
import {createStore, combineReducers } from 'redux';
import word from './modules/word';

const rootReducer = combineReducers({word});
//리듀서를 하나로 묶은 것 //리듀서 추가방법: {bucket, bucket2, bucket3....}

const store = createStore(rootReducer); //스토어 생성!


export default store;