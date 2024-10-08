import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
// import './styles/globals.css';  // Assuming you have global styles
import FileUpload from './components/FileUpload';
import GetImagesPage from './components/GetImagesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/uploadimage" element={<FileUpload />} />
        <Route path = "/get" element={<GetImagesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
