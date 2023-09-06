import { useEffect, useState } from "react";
import data from "./data";
import axios from 'axios';

function Quiz() {

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState(false);
  const [답안, set답안] = useState("");
  const [randomData, setRandomData] = useState(data);

  // 상태 설정
  const [feedBacks, setFeedBacks] = useState([]);


  // 문제를 무작위로 섞기
  useEffect(() => {
    const dataCopy = [...data];
    const newItem = [];
    while (dataCopy.length > 0) {
      const random = Math.floor(Math.random() * dataCopy.length);
      const splicArray = dataCopy.splice(random, 1);
      const value = splicArray[0];
      newItem.push(value)
    }
    setRandomData(newItem);
  }, []);

  // 답안 제출
  const [isCheck, setIsCheck] = useState(false);

  const 답안제출 = () => {
    if (답안 === randomData[idx].답안) setScore(prev => prev + 1);
    setIdx(prevIdx => prevIdx + 1);
    setHint(false);
    setIsCheck(false);
  }

  // 답안 저장
  const 답안저장 = (e) => {
    set답안(e.target.textContent);
    setIsCheck(true);
  }

  // 로컬스트레이지 시작
  const [피드백내용, 피드백내용변경] = useState('');

  useEffect(function () {
    if (localStorage.getItem('피드백리스트') === null) localStorage.setItem('피드백리스트', JSON.stringify([]))
  }, [])

  function 피드백저장(e) {
    피드백내용변경(e.target.value);
  }

  function 피드백제출() {
    let a = JSON.parse(localStorage.getItem("피드백리스트"));
    let copy = [...a];
    copy.push(피드백내용);
    localStorage.setItem("피드백리스트", JSON.stringify(copy));
    피드백내용변경('');
  }
  // 로컬스트레이지 시작 eee

  return (
    <>
      {
        idx < randomData.length
          ?
          // 문제를 다 풀지 않았을때
          <div className="wrap">
            <div>
              <h2>{randomData[idx].문제}</h2>
              <div className="question">
                {
                  randomData[idx].선택지.map(function (item, index) {
                    return (
                      <div className="row" key={index}>
                        <input type="radio" checked={isCheck} id={index} name={randomData[idx].id} /><label htmlFor={index} onClick={답안저장}>{item}</label>
                      </div>
                    )
                  })
                }
              </div>
              <div className="score">
                실시간 점수 : {score}
              </div>
              <div className="hint">
                <h3>힌트를 보려면 힌트버튼을 눌러주세요. </h3>
                {
                  hint === true ? randomData[idx].힌트 : null
                }
              </div>
              <div className="btnSet">
                <button onClick={답안제출}>제출</button>
                <button type="button" onClick={() => hint === true ? setHint(false) : setHint(true)}>힌트</button>
              </div>
            </div>

            {/* 피드백 */}
            <div className="feedBack">
              <h3>원하시는 요구사항이 있으면 적어주세요!</h3>
              <textarea name="userFeedback" onChange={피드백저장} value={피드백내용}></textarea>
              <div className="btnSet flexEnd">
                <button onClick={피드백제출}>제출</button>
              </div>
              <div className="info">
                <h2>MongoDB</h2>
                <h2>localStorage</h2>
                <ul>
                  {
                    JSON.parse(localStorage.getItem("피드백리스트")) === null
                    ? null
                    : JSON.parse(localStorage.getItem("피드백리스트")).map((item,idx) => {
                      return (
                        <li key={idx}>{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          :
          // 문제를 다 풀었을때
          <div className="wrap">
            <h2>문제를 다 푸셨습니다!</h2>
            <p>
              최종 점수 : {score}
            </p>
          </div >
      }
    </>
  )
}

export default Quiz;


