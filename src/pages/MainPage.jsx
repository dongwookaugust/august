import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Pages.css';

function MainPage() {
  let navigate = useNavigate();

  return (
    <div className="main-page">
      <Button variant="primary" onClick={() => { navigate('/login') }}>START</Button>
    </div>
  );
}

export default MainPage;