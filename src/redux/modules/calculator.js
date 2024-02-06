import { type } from '@testing-library/user-event/dist/type';

// 초기 상태값
const initialState = {
  globalNumber: 0,
};

const PLUS = 'PLUS';
const MINUS = 'MINUS';

export const plus = (payload) => ({
  type: PLUS,
  payload: payload,
});

export const minus = (payload) => ({
  type: MINUS,
  payload: payload,
});

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        globalNumber: state.globalNumber + action.payload,
      };
    case MINUS:
      return {
        ...state,
        globalNumber: state.globalNumber - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
