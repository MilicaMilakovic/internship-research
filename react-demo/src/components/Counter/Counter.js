import {  useState } from 'react';
import './Counter.css'

const Counter = (props) => {

  const [info, setInfo] = useState('info');


    const onClickChild = () => {
        console.log('click in child');
        setInfo('Updated!');
        
        props.onClickHandler(props.data.title);
    }

  return (
    <div className='counter-div'>
      <h1>Counter komponenta: {props.data.title} </h1>
      <h2>{ info }</h2>
      <button onClick={onClickChild}>Click</button>
    </div>
  );
};

export default Counter;
