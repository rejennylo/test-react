import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import imgs from './assets/images/Img-activity03.jpg';
import './App.css';
// import { activityCards } from './data'

import activity01 from '../src/assets/Img-activity01.jpg';
import activity02 from '../src/assets/Img-activity02.jpg';
import activity03 from '../src/assets/Img-activity03.jpg';

const activityCards = [
  {
    title: '參與台北寵物論壇 爭取貓咪友善環境',
    text: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    image: { activity01 },
    year: '2023',
    month: '12',
    day: '26',
  },
  {
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    text: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
    image: { activity02 },
    year: '2024',
    month: '1',
    day: '13',
  },
  {
    title: '收容所模特兒大比拼！',
    text: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    image: { activity03 },
    year: '2023',
    month: '10',
    day: '13',
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        {activityCards.map((item, i) => {
          // return <img key={i} src={item.image} />;
          return (
            <img key={i} src={item.image} />
          );
        })}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
