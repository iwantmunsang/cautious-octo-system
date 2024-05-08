/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // useState를 사용하여 목록 상태를 생성합니다.
  const [목록, set목록] = useState([]);
  const [형식화된날짜, set형식화된날짜] = useState('');

  return (
    <div className="App">
      <div className='newwin'></div>
      <div className="black-nav">
        <h4 style={{ fontSize: '20px' }}>할일 기록</h4>
      </div>

      <div>
        {/* input 요소와 버튼을 추가합니다. */}
        <input id='input'></input>
        <button id='btn' onClick={() => {
          // input 요소의 값을 가져옵니다.
          let val = document.getElementById('input').value;
          // 기존의 목록에 새 값을 추가하기 위해 set목록 함수를 호출합니다.
          // 이전 상태를 받아와서 새 값을 추가한 배열을 다시 설정합니다.
          set목록(prevState => [...prevState, val]);

          // 현재 날짜와 시간을 담은 Date 객체를 생성합니다.
          let 현재날짜 = new Date();

          // 날짜를 원하는 형식으로 포맷팅합니다.
          let 년 = 현재날짜.getFullYear(); // 년도
          let 월 = 현재날짜.getMonth() + 1; // 월 (0부터 시작하므로 1을 더해줍니다)
          let 일 = 현재날짜.getDate(); // 일
          let 형식화된날짜 = `${년}-${월 < 10 ? '0' + 월 : 월}-${일 < 10 ? '0' + 일 : 일}`; // 형식화된 날짜

          // 형식화된 날짜 상태를 업데이트합니다.
          set형식화된날짜(형식화된날짜);

        }}>추가</button>
      </div>

      <div>
        {/* 목록을 역순으로 출력합니다. */}
        {목록.slice(0).reverse().map((값, 인덱스) => (
          <div key={인덱스} className='list'>
            <h4>{값}</h4>
            <q>{형식화된날짜}</q>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
