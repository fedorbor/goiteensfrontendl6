import { Routes,Route } from 'react-router-dom';
export const App = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<h1>heloo</h1>}/>
        <Route path="/lessons" element={<h2>helos</h2>}/>
       </Routes>
    </div>
  );
};
