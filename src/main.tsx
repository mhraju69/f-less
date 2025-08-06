import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import AirdropPage from './components/AirdropPage.jsx'
import Auth from './components/Auth.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/airdrop' element={<AirdropPage/>}/>
      <Route path='/airdrop/auth' element={<Auth/>}/>

    </Routes>
    </BrowserRouter>
  </StrictMode>
);
