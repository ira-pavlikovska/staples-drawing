import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import DrawingContainer from "./containers/DrawingContainer";

function App() {
  return (
      <div style={{backgroundColor: '#ced7e0'}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DrawingContainer/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
