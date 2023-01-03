import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/main';
function App() {
  return (
    <div>
    	<BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default /> //adding the default makes this the default path
        </Routes>
    	</BrowserRouter>
    </div>
  );
}
export default App;


