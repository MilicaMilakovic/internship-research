import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {

  // let dataArray = [1,2,3,4,5];

  const [tasks, setTasks] = useState([]);

  const clickHandler = (data) => {
    console.log('click in parent ', data );
  }


  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
    setTasks(data);
  };

  useEffect(()=> {
    fetchData();
  },[]);

  return (
    <div>
      <h1>Test</h1>
      <hr/>
      {
        tasks.map(e => <Counter key={e.id} data={e} onClickHandler={clickHandler}></Counter>)
      }
    </div>
  );
}

export default App;
