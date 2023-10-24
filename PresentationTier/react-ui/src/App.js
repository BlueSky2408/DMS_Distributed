import './App.css';
import Footers from './pages/Footers';
import Home from './components/Mainpage';

import Headers from './pages/Headers';

import LoginContainers from './components/Login';

import { Box } from '@mui/material'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={configureStore}>
      <ToastContainer />
      <Box style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <BrowserRouter>
          <Headers />
          <Routes>
            <Route path="/login" element={<LoginContainers/>}/>
            <Route path="/documents" element={<Home/>}/>
          </Routes>
          {/* <Footers /> */}
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
