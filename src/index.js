import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './Context/TodoContext';
import { ColorsProvider } from './Context/ColorsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvider>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </TodoProvider>
);
