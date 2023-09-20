import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
