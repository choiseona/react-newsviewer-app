// src/App.js
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  )
}

export default App;