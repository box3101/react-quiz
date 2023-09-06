import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Quiz from "./quiz";
import Write from "./Write";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={
          <Quiz />
        } />
        <Route path="/write" element={
          <Write />
        } />
      </Routes>
    </>
  );
}

export default App;
