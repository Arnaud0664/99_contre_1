import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error'
import Header from './components/Header';
import Story from './pages/Story';
                                            
function App() {
    return (
        <>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/story/:id" element={<Story />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        </>  
    );
}

export default App;
