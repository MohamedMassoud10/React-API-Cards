import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grids from "./Grids"
import Header from './Header';
function Page() {
  return (
    <div className='containner'>
      <Header />
    </div>
  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))
