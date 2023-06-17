// import logo from './logo.svg';
import './App.css';
///  importing the home component 
import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routePath } from './constants/Route';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
      <Route path={routePath.home} element={<Home />} />
      {/* <Route path={routePath.home1} element={<Home />} /> */}

      <Route path={routePath.categories} element={<CategoryMovies/>} />
      <Route path={routePath.invalid} element={<Home />} />

      </Routes>
    </Router>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
