
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './context/AuthProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AuthProvider>
//     <div className=' dark:bg-slate-900 dark:text-white'>
//     <App />
//     </div>
//     </AuthProvider>
//   </BrowserRouter>
// )
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import AuthProvider from './context/AuthProvider.jsx';
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <div className='dark:bg-slate-900 dark:text-white'>
          <App />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
