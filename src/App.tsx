import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// layouts
import NavBar from 'layouts/Navbar';

// modules
const LazyCatalog = React.lazy(() => import('modules/Catalog'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='catalog' element={
              <React.Suspense fallback='Loanding...'>
                <LazyCatalog />
              </React.Suspense>
            } />

            {/* page 404 */}
            <Route path='*' element={<Navigate replace to='/'/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
