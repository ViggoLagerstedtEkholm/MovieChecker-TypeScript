import React from 'react';
import {Container} from "react-bootstrap";
import Home from "./Components/Home";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import MoviePage from "./Components/Movies/MoviePage";

function App() {
    return (
        <Container className="my-4">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/movie/:id" element={<MoviePage/>} />
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
