import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    const results = await axios.get('https://api.adviceslip.com/advice');
    const data = results.data;
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    try {
      fetchAdvice();
    } catch (error) {}
  }, []);

  return (
    <div>
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>

          <button className='button' onClick={fetchAdvice}>
            <span>Any Spoilers?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
