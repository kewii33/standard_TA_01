import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { plus, minus } from './redux/modules/calculator';
import { useState } from 'react';

function App() {
  const globalNumber = useSelector((state) => state.calculator.globalNumber);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

  const onClickPlusButtonHandler = () => {
    dispatch(plus(number));
  };

  const onClickMinusButtonHandler = () => {
    dispatch(minus(number));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" onChange={onChangeHandler} /> 만큼을{' '}
        <button onClick={onClickPlusButtonHandler}>더할게요</button>{' '}
        <button onClick={onClickMinusButtonHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{globalNumber}</p>
      </div>
    </div>
  );
}

export default App;
