import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Region } from './pages/Region';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/region/:slug" element={<Region />} />
    </Routes>
  )
}