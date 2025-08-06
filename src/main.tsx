import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter , Routes, Route } from 'react-router';
import AirdropPage from './components/AirdropPage.jsx'
import Auth from './components/Auth.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter >
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/airdrop' element={<AirdropPage/>}/>
      <Route path='/airdrop/auth' element={<Auth/>}/>

    </Routes>
    </HashRouter >  
  </StrictMode>
);
