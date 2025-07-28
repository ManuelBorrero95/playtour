import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CreateEvent from './pages/CreateEvent';
import Home from './pages/Home';


function App() {
  return (

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
           <Route path="/crear-evento" element={<CreateEvent />} />
        </Routes>
      </Layout>
    </Router>




  )
}

export default App;
