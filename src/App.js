/*
 * @Author: zhuxucome zhuxucome@126.com
 * @Date: 2022-08-14 15:07:34
 * @LastEditors: zhuxucome zhuxucome@126.com
 * @LastEditTime: 2022-08-15 11:06:38
 * @FilePath: \my-app\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from './logo.svg';
import './App.css';

function sayHi() {
  alert('hi')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          王强读书天才计划
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          把所有时间都用来读书，疯狂zpy
        </a>
        <button onClick={function(){alert('奋斗，才是真正的幸福')}}>点我</button>
      </header>
    </div>
  );
}

export default App;
