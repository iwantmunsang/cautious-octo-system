/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목 , b] = useState(['siu','춘잣!','ㅇㅇㄱㄴ!'])
  let [좋아요, 변경] = useState(0)

  function 좋아요1(){
    {변경(좋아요 + 1)}
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red' , fontsize : '20px'}}>sus</h4>
      </div>
      <h4><span onClick={()=>{
        let copy = [...글제목]
        if(copy[0] == 'siu'){
          copy[0] = '뽈롱'
        } else{
          copy[0] = 'siu'
        }
        
        b(copy)

        }}>지리는 버튼</span></h4>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={좋아요1}>❤</span>   {좋아요}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
