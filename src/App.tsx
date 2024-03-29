import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

const App: React.FC = () => (
  <Provider store={store}>
    <div className='flex flex-col h-full'>
      <div className='flex flex-col items-center justify-center h-4/5'>
        <span className='text-4xl'>Basic Setup</span>
        <span className='text-4xl'>Vite + React + Tailwind + Redux</span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <span className='text-4xl'>
          Made with <span className='text-red-500'> &#10084;</span> by{' '}
          <a
            className='text-blue-400 underline'
            href='https://madhav.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            Madhav
          </a>
        </span>
      </div>
    </div>
  </Provider>
);

export default App;
